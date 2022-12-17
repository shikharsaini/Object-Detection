import torch
from matplotlib import pyplot as plt
# Loading in yolov5s - you can switch to larger models such as yolov5m or yolov5l, or smaller such as yolov5n
model = torch.hub.load('ultralytics/yolov5', 'yolov5s')

def RunYolo(img):
    results = model(img)
    fig, ax = plt.subplots(figsize=(16, 12))
    results.save(save_dir='results')