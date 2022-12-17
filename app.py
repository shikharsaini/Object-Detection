from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from API.Image import mask_image

from flask_pymongo import pymongo

app = Flask(__name__, static_url_path='', static_folder='Frontend/build')
CORS(app) #comment this on deployment
api = Api(app)
@cross_origin()
def serve():
    return send_from_directory(app.static_folder,'index.html')
#db.db.collection.insert_one({"name": "Shikhar"})
api.add_resource(mask_image, '/Mask')
#api.add_resource(ClickHandler, '/check')