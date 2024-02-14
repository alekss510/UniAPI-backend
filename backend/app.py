from flask import Flask, request, jsonify
from modul import JsonHandler
import json
from flask_cors import CORS
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, unset_jwt_cookies, jwt_required, JWTManager




app = Flask(__name__)

CORS(app)

app.config["JWT_SECRET_KEY"] = "please-remember-to-change-me"
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
jwt = JWTManager(app)


@app.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            data = response.get_json()
            if type(data) is dict:
                data["access_token"] = access_token 
                response.data = json.dumps(data)
        return response
    except (RuntimeError, KeyError):
     
        return response

@app.route('/token', methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return {"msg": "Mail o Passwort falsch"}, 401
    
    access_token = create_access_token(identity=email)
    response = {"access_token":access_token}
    return response


@app.route('/logout', methods=["POST"])
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response


@app.route('/courses', methods=['GET'])
def test():
    return JsonHandler.getCourses()


@app.route('/<string:course>', methods=['GET', "POST", "DELETE", "PUT"])
def course(course): 
    course = request.path[1:6]
    modulnummer = request.args.get('modulnummer')
 
    if request.method == "POST":
        
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
        lane = request.args.get('lane')

        JsonHandler.addCourse(course, modulnummer, modul, fakultaet, ects, doz, mchef, pruf, prufvor, sprache, semester, zzc, link, lane)
    
    if request.method == "DELETE":
        
        JsonHandler.deleteModul(course, modulnummer)

    if request.method == "PUT":

        new_value = request.args.get('newValue')
        
        JsonHandler.modifyModul(course, modulnummer, new_value)

    course_object = JsonHandler.getCourse(course)
    course_object = json.dumps(course_object, ensure_ascii= False)
        
    return course_object
    
@app.route('/<string:course>/<string:modulnummer>', methods=['DELETE', 'PUT'])
def modul(course, modulnummer):
    course = request.path[1:6]
    
    if request.method == "DELETE":

        JsonHandler.deleteModul(course, modulnummer)

    if request.method == "PUT":

        new_value = request.args.get('newValue')
        
        JsonHandler.modifyModul(course, modulnummer, new_value)

    modul_object = JsonHandler.getModul(course, modulnummer)
    modul_object = json.dumps(modul_object, ensure_ascii= False)
    
    return modul_object


if __name__ == '__main__':
    app.run()
