In this application is used the open data api from Traffic Management of Finland.
The api url used here is http://tie.digitraffic.fi/api/v1/metadata/camera-stations
and it's data response is in json format.

This application has four React components. Camerasel component has two
drowpdown filters in which is selected the camera to be shown in the Cameraview
component and at same it's geo location is shown in the Mapview component. 
The time stamp of the loaded dataset is shown in the Timeview component.
