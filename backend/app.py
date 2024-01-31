from flask import Flask, request, jsonify
from modul import JsonHandler
import json
from flask_cors import CORS





app = Flask(__name__)
CORS(app)
    

@app.route('/', methods=['GET'])
def test():
    return JsonHandler.getCourses()


@app.route('/<string:course>', methods=['GET', "PUT", "POST", "DELETE"])
def course(course): 
    course = request.path[1:6]
    modulnummer = request.args.get('modulnummer')

    if request.method == "PUT":
        
        key_value = request.args.get('keyValue')
        new_value = request.args.get('newValue')
        
        JsonHandler.modifyModul(course, modulnummer, key_value, new_value)
    
    if request.method == "POST":
        
        modulnummer = request.args.get('modulnummer')
        modul = request.args.get('modul')
        fakultaet = request.args.get('fakultaet')
        ects = request.args.get('ects')
        doz = request.args.get('doz')
        mchef = request.args.get('mchef')
        pruf = request.args.get('pruf')
        prufvor = request.args.get('prufvor')
        sprache = request.args.get('sprache')
        semester = request.args.get('semester')
        zzc = request.args.get('zzc')
        link = request.args.get('link')
    

        JsonHandler.addCourse(course, modulnummer, modul, fakultaet, ects, doz, mchef, pruf, prufvor, sprache, semester, zzc, link)
    
    if request.method == "DELETE":

        JsonHandler.deleteModul(course, modulnummer)
    
    course_object = JsonHandler.getCourse(course)
    course_object = json.dumps(course_object, ensure_ascii= False)
        
    return course_object
    
@app.route('/<string:course>/<string:modulnummer>', methods=['GET'])
def modul(course, modulnummer):
    course = request.path[1:6]
    modul_object = JsonHandler.getModul(course, modulnummer)
    modul_object = json.dumps(modul_object, ensure_ascii= False)
    
    return modul_object


if __name__ == '__main__':
    app.run()
