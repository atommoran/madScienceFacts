from flask import Flask, request
from functools import wraps
from flask_cors import CORS, cross_origin
from waitress import serve
import json
import datetime
import os
import csv
from waitress import serve

app = Flask(__name__)

@app.after_request
def after_request(response):
#    del response.headers["Access-Control-Allow-Origin"]
#    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    return response

@app.route("/")
def intro():
    return "This is the backend for madsciencefacts.co.uk. It is designed to bring knowledge and joy to all those that possess the password."

@app.route('/login', methods=['POST'])
@cross_origin()
def login_get_facts():
    req_data = request.get_json()
    if 'year' in req_data:
        year = req_data['year']
    else:
        return "FAILED: Did not supply a year"
    if 'password' in req_data:
        password = req_data['password']
    else:
        return "FAILED: Did not supply a password"
    if password != os.environ[year]:
        outputDict = {"login": "Failed"}
        output = json.dumps(outputDict)
    else:
        if year == "L2":
            opened = False
            with open('L2.txt') as csv_file:
                opened = True
                csv_reader = csv.reader(csv_file, quotechar='"', delimiter=',', quoting=csv.QUOTE_ALL, skipinitialspace=True)
                resultArray = []
                for row in csv_reader:
                    releaseDate = datetime.datetime.strptime(row[0], "%d/%m/%Y")
                    if releaseDate < datetime.datetime.now():
                        stepDict = {"release_date": row[0], "release_datetime": releaseDate, "img_url": row[1], "text": row[2], "url_link": row[3]}
                        resultArray.append(stepDict)
                resultArray = sorted(resultArray, key=lambda k: k['release_datetime'], reverse=True)
                for res in resultArray:
                    del res['release_datetime']
            if not opened:
                return "FAILED: Failed to open L2 fact file"
            outputDict = {"login": "Success", "facts": resultArray}
            output = json.dumps(outputDict)
        elif year == "L2P":
            opened = False
            with open('L2.txt') as csv_file:
                opened = True
                csv_reader = csv.reader(csv_file, quotechar='"', delimiter=',', quoting=csv.QUOTE_ALL, skipinitialspace=True)
                L2Array = []
                for row in csv_reader:
                    releaseDate = datetime.datetime.strptime(row[0], "%d/%m/%Y")
                    stepDict = {"release_date": row[0], "release_datetime": releaseDate, "img_url": row[1], "text": row[2], "url_link": row[3]}
                    L2Array.append(stepDict)
                L2Array = sorted(L2Array, key=lambda k: k['release_datetime'], reverse=True)
                for res in L2Array:
                    del res['release_datetime']
            if not opened:
                return "FAILED: Failed to open L2 fact file"
            opened = False
            with open('L2P.txt') as csv_file:
                opened = True
                csv_reader = csv.reader(csv_file, quotechar='"', delimiter=',', quoting=csv.QUOTE_ALL, skipinitialspace=True)
                L2PArray = []
                for row in csv_reader:
                    releaseDate = datetime.datetime.strptime(row[0], "%d/%m/%Y")
                    if releaseDate < datetime.datetime.now():
                        stepDict = {"release_date": row[0], "release_datetime": releaseDate, "img_url": row[1], "text": row[2], "url_link": row[3]}
                        L2PArray.append(stepDict)
                L2PArray = sorted(L2PArray, key=lambda k: k['release_datetime'], reverse=True)
                for res in L2PArray:
                    del res['release_datetime']
            if not opened:
                return "FAILED: Failed to open L2P fact file"
            outputDict = {"login": "Success", "L2": {"facts": L2Array}, "L2P": {"facts": L2PArray}}
            output = json.dumps(outputDict)
        elif year in ["Teachers", "ExStudents"]:
            opened = False
            with open('L2.txt') as csv_file:
                opened = True
                csv_reader = csv.reader(csv_file, quotechar='"', delimiter=',', quoting=csv.QUOTE_ALL, skipinitialspace=True)
                L2Array = []
                for row in csv_reader:
                    releaseDate = datetime.datetime.strptime(row[0], "%d/%m/%Y")
                    if releaseDate < datetime.datetime.now():
                        stepDict = {"release_date": row[0], "release_datetime": releaseDate, "img_url": row[1], "text": row[2], "url_link": row[3], "released": True}
                    else:
                        stepDict = {"release_date": row[0], "release_datetime": releaseDate, "img_url": row[1], "text": row[2], "url_link": row[3], "released": False}
                    L2Array.append(stepDict)
                L2Array = sorted(L2Array, key=lambda k: k['release_datetime'], reverse=True)
                for res in L2Array:
                    del res['release_datetime']
            if not opened:
                return "FAILED: Failed to open L2 fact file"
            opened = False
            with open('L2P.txt') as csv_file:
                opened = True
                csv_reader = csv.reader(csv_file, quotechar='"', delimiter=',', quoting=csv.QUOTE_ALL, skipinitialspace=True)
                L2PArray = []
                for row in csv_reader:
                    releaseDate = datetime.datetime.strptime(row[0], "%d/%m/%Y")
                    if releaseDate < datetime.datetime.now():
                        stepDict = {"release_date": row[0], "release_datetime": releaseDate, "img_url": row[1], "text": row[2], "url_link": row[3], "released": True}
                    else:
                        stepDict = {"release_date": row[0], "release_datetime": releaseDate, "img_url": row[1], "text": row[2], "url_link": row[3], "released": False}
                    L2PArray.append(stepDict)
                L2PArray = sorted(L2PArray, key=lambda k: k['release_datetime'], reverse=True)
                for res in L2PArray:
                    del res['release_datetime']
            if not opened:
                return "FAILED: Failed to open L2P fact file"
            outputDict = {"login": "Success", "L2": {"facts": L2Array}, "L2P": {"facts": L2PArray}}
            output = json.dumps(outputDict)
    return output

@app.route('/quiz', methods=['POST'])
@cross_origin()
def get_quiz():
    req_data = request.get_json()
    if 'year' in req_data:
        year = req_data['year']
    else:
        return "FAILED: Did not supply a year"
    if 'password' in req_data:
        password = req_data['password']
    else:
        return "FAILED: Did not supply a password"
    if password != os.environ["quiz_"+year]:
        outputDict = {"login": "Failed"}
        output = json.dumps(outputDict)
    else:
        if year == "L2":
            opened = False
            with open('quiz_L2.txt') as csv_file:
                opened = True
                csv_reader = csv.reader(csv_file, quotechar='"', delimiter=',', quoting=csv.QUOTE_ALL, skipinitialspace=True)
                resultArray = []
                for row in csv_reader:
                    try:
                        ansint = int(row[6])
                    except:
                        ansint = False
                    if ansint and (ansint in [1,2,3,4]):
                        stepDict = {"img_url": row[0], "question": row[1], "answers": [{"int": 1, "text": row[2]}, {"int": 2, "text": row[3]}, {"int": 3, "text": row[4]}, {"int": 4, "text": row[5]}], "correct_int": ansint}
                        resultArray.append(stepDict)
            if not opened:
                return "FAILED: Failed to open L2 quiz file"
            outputDict = {"login": "Success", "questions": resultArray}
            output = json.dumps(outputDict)
        elif year == "L2P":
            opened = False
            with open('quiz_L2P.txt') as csv_file:
                opened = True
                csv_reader = csv.reader(csv_file, quotechar='"', delimiter=',', quoting=csv.QUOTE_ALL, skipinitialspace=True)
                resultArray = []
                for row in csv_reader:
                    try:
                        ansint = int(row[6])
                    except:
                        ansint = False
                    if ansint and (ansint in [1,2,3,4]):
                        stepDict = {"img_url": row[0], "question": row[1], "answers": [{"int": 1, "text": row[2]}, {"int": 2, "text": row[3]}, {"int": 3, "text": row[4]}, {"int": 4, "text": row[5]}], "correct_int": ansint}
                        resultArray.append(stepDict)
            if not opened:
                return "FAILED: Failed to open L2P quiz file"
            outputDict = {"login": "Success", "questions": resultArray}
            output = json.dumps(outputDict)
    return output

if __name__ == "__main__":
    serve(app, host='0.0.0.0', port=5000)
