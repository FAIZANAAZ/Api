from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

#  http://localhost:8000/docs pr ak page open hoga jha sary functions hongy jo jo bnay hen get post put delete etc
#  phir click =>any name post put delete get => try it out => execute pr click kren gy to ye function call ho jayga phir 
# jo jo bosy me manga he wo de dena hoga PHIR AGAIN execute krengy to wo btayga ke sahi he request ya nhi 200ok  dekr 

names = ["Ali", "Ahmed", "Sara", "Tariq", "Aisha"]

@app.get("/")
# / ye he hmara url yqni ispr hmjaengy to api get ho jaygi yani localhost:8000/
# ye likhna lazmi hai
# It is necessary to write this

# iski jha agr hm likhen @app.get("/hello") to ye localhost:8000/hello pr chalega

# If we write @app.get("/hello") instead, it will work at localhost:8000/hello
def get_function():
    """ye functiona ak json object return karega jisme message key ki value hello world hogi
    jb hm localhost:8000/ pr jaenge to ye function call hoga automatically
    ye function fastapi ka ek endpoint hai
    is function ka naam kuch bhi ho sakta hai

    """
    # logic yha pr likhen gy
    
    return names

# /******************************************************************************/
 
class Data(BaseModel):
    # BseModel is a pydantic class ye ak struction he dictionary ki jga ye bhi kr skty hen 
    # ye hmny pydantic se bnaya he ye function ki ak body bn gai jo hm data type me pass krengy or wo dena lazim hoga 
    

    name: str
    age: int
    
    # ye actual me he {"name": "string", "age": int} 
@app.post("/create")
def create_function(data: Data):
    # YANIYE AK JSON dicstionary hi receive karega  osky ilawa koch nhi lega
    # jo chiz hm pera meters me oass krty hen wha pr wo hm sy browser pr body me mangta he or jb hm dety hen to khod hi argument or pass jr drta he
    
    # logic yha pr likhen gy
    names.append(data.name)
    return names



@app.put("/update/{item_id}")
# This is the PUT function, used for updating items
def update_function(json_data: Data, item_id: int):
    # The parameters include item_id and data from the request body
    # It will update the item based on the ID

    for i, name in enumerate(names):
        if item_id == i:
            names[i] = json_data.name
            break
    return names

# ******************************************************************************
@app.delete("/{item_id}")
def delete_function(item_id: int):
    names.pop(item_id)
    
    # Logic yha pr likhen gy
    return names
# ******************************************************************************