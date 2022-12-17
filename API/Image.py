from flask import Flask, render_template , request , jsonify
from PIL import Image
import os , io , sys
import numpy as np 
import cv2
import base64
from flask_restful import Api, Resource, reqparse
from flask import send_file
from YoloV5.yolo import RunYolo

class mask_image(Resource):
	def get(self):
		filename = "SavedFile.jpg"
		Features = request.args.getlist('Features[]')
		Selected_Features = []
		im = Image.open(filename)
		RunYolo(im)
		ResultImage = "results/SavedFile.jpg"
		return send_file(ResultImage, mimetype='image/gif')

	def post(self):
		parser = reqparse.RequestParser()
		file = request.files['file']
		im = Image.open(file)
		im.save('SavedFile.jpg')
		final_ret = {"status": "Success", "message": "filename"}
		return final_ret