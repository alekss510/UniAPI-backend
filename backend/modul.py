import json
import os 

class JsonHandler:

    def getKeys(course, modulnummer):
        
        for i in JsonHandler.getCourse(course):
            if isinstance(i, dict) and 'Modulnummer' in i:
                if i['Modulnummer'].lower() == modulnummer.lower():
                    return i.keys() 
        

    def writeJson(course, data):
        file_path = f'backend/JSON/{course}-module-long.json'

        with open(file_path, 'w', encoding='utf-8') as file:
                json.dump(data, file, indent=2, ensure_ascii= False)
        
        file.close()

    def getCourse(course):

        file_path = f'backend/JSON/{course}-module-long.json'
        with open(file_path, 'r', encoding='utf-8') as file:
            data = json.load(file)
            
            return data
        
    def getCourses():
        ordnerpfad = 'backend/JSON'

        json_dateien = [datei for datei in os.listdir(ordnerpfad) if datei.endswith('.json')]
        namelist = []
        
        for name in json_dateien:
            name = name[:5]
            namelist.append(name[:5])
       

        return namelist

   
    def getModul(course, modulnummer):
            
        for i in JsonHandler.getCourse(course):
            if isinstance(i, dict) and 'Modulnummer' in i:
                if i['Modulnummer'].lower() == modulnummer.lower():
                    return i 
                
    def modifyModul(course_name, modulnummer, key_value, change):
        
        course = JsonHandler.getCourse(course_name)

        for i in course:
            if i['Modulnummer'].lower() == modulnummer.lower():
                i[key_value] = change
                JsonHandler.writeJson(course_name, course)
                
                return "Modification successful!"
   

    def addCourse(course, modulnummer, modul, fakultaet, ects, doz, mchef, pruf, prufvor, sprache, semester, zzc, link):
        
        data = JsonHandler.getCourse(course)

        existing = False
        for d in data:
            if d['Modulnummer'].lower() == modulnummer.lower():
                existing = True
        
                
        if existing:
            return 'Schon vorhanden'
        else:
            data.append(
                {
                    "Modulnummer" : modulnummer.upper(),
                    "Modul" : modul,
                    "Fakultät" : fakultaet,
                    "ECTS-Leistungspunkte": ects,
                    "Dozierende" : doz,
                    "Modulverantwortliche": mchef,
                    "Prüfungsleistung(en)" : pruf,
                    "Prüfungsvorleistung(en)" : prufvor,
                    "Sprache(n)": sprache,
                    "Semester": semester,
                    "Zuordnung zum Curriculum": zzc,
                    "Modulux-Link": link
                }
            )

            JsonHandler.writeJson(course, data)

            return 'add Course'

    def deleteModul(course, modulnummer):
        
        data = JsonHandler.getCourse(course)

        rm_element = JsonHandler.getModul(course, modulnummer)
        
        for modul in data:
            if modul.get('Modulnummer').lower() == rm_element.get('Modulnummer').lower():
                data.remove(rm_element)

    
        JsonHandler.writeJson(course, data)

            
print(JsonHandler.getKeys('20inb', 'C004'))