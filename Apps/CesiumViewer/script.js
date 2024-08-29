document.addEventListener('DOMContentLoaded', () => {
    // Set your Cesium Ion Access Token here
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlZjYxOTVkMi00ZmMwLTQyYzEtYWE4MS1iNWY3MTIxMmY4NjMiLCJpZCI6MjM1ODI3LCJpYXQiOjE3MjQ0Nzk4NzZ9.fD8IztW2dCnWaC0xNWNI1x3yrCouArTjLgFZETy7elg'; // Replace with your actual token

    // Initialize Cesium Viewer
    const viewer = new Cesium.Viewer('cesiumContainer', {
        animation: false,
        timeline: false,
        fullscreenButton: false,
        sceneModePicker: false,
        navigationHelpButton: false,
        geocoder: false,
        infoBox: false,
        selectionIndicator: false,
        navigationInstructionsInitiallyVisible: false,
        baseLayerPicker: false,
        homeButton: false,
    });

    viewer.scene.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(78.9629, 20.5937, 8000000.0)
    });

    const homeLocation = Cesium.Cartesian3.fromDegrees(78.9629, 20.5937, 4000000.0);

    document.getElementById('customHomeButton').addEventListener('click', () => {
        viewer.scene.camera.flyTo({
            destination: homeLocation,
            duration: 2,
            complete: function() {
                console.log('Camera animation complete');
            }
        });
    });

    // Define locations and camera views for the slideshow and 3D models
var locations = [
    {
        longitude: 72.8777, 
        latitude: 19.0760, 
        altitude: 10.0,
        description: '<div><h3>Mumbai</h3><p>Details about Mumbai.</p></div>',
        model: 'Assets/basic_factory_modeling.glb',
        scale: 10,
        cameraViews: [
            { // Top view
                longitude: 72.8777,
                latitude: 19.0760,
                altitude: 2000.0,
                heading: Cesium.Math.toRadians(0),
                pitch: Cesium.Math.toRadians(-90),
                roll: Cesium.Math.toRadians(0)
            },
            
        ]
    },
    {
        longitude: 77.1025, 
        latitude: 28.6139, 
        altitude: 1000.0,
        description: '<div><h3>Delhi</h3><p>Details about Delhi.</p></div>',
        model: 'Assets/elevated_mumbai_metro_station.glb',
        scale: 0.0005,
        cameraViews: [
            { // Top view
                longitude: 77.1025,
                latitude: 28.6139,
                altitude: 2000.0,
                heading: Cesium.Math.toRadians(0),
                pitch: Cesium.Math.toRadians(-90),
                roll: Cesium.Math.toRadians(0)
            },
            
        ]
    },
    {
        longitude: 77.5946, 
        latitude: 12.9716, 
        altitude: 1000.0,
        description: '<div><h3>Bengaluru</h3><p>Details about Bengaluru.</p></div>',
        model: 'Assets/metallic_showroom_gallery.glb',
        scale: 0.1,
        cameraViews: [
            { // Top view
                longitude: 77.5946,
                latitude: 12.9716,
                altitude: 2000.0,
                heading: Cesium.Math.toRadians(0),
                pitch: Cesium.Math.toRadians(-90),
                roll: Cesium.Math.toRadians(0)
            },
           
        ]
    },
    {
        longitude: 88.3639, 
        latitude: 22.5726, 
        altitude: 1000.0,
        description: '<div><h3>Kolkata</h3><p>Details about Kolkata.</p></div>',
        model: 'Assets/mv_spartan.glb',
        scale: 0.1,
        cameraViews: [
            { // Top view
                longitude: 88.3639,
                latitude: 22.5726,
                altitude: 2000.0,
                heading: Cesium.Math.toRadians(0),
                pitch: Cesium.Math.toRadians(-90),
                roll: Cesium.Math.toRadians(0)
            },
            
        ]
    },
    {
        longitude: 80.2785, 
        latitude: 13.0878, 
        altitude: 1000.0,
        description: '<div><h3>Chennai</h3><p>Details about Chennai.</p></div>',
        model: 'Assets/Lothal textured mesh.glb',
        scale: 100,
        cameraViews: [
            { // Top view
                longitude: 80.2785,
                latitude: 13.0878,
                altitude: 2000.0,
                heading: Cesium.Math.toRadians(0),
                pitch: Cesium.Math.toRadians(-90),
                roll: Cesium.Math.toRadians(0)
            },
            
        ]
    }
];

    var slideshowRunning = false;
    var currentLocationIndex = 0;
    var currentViewIndex = 0;
    var intervalId = null;
    var progressIntervalId = null;

    function moveToLocationView(locationIndex, viewIndex) {
        var location = locations[locationIndex];
        var view = location.cameraViews[viewIndex];
        viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(view.longitude, view.latitude, view.altitude),
            orientation: {
                heading: view.heading,
                pitch: view.pitch,
                roll: view.roll
            },
            duration: 5.0
        });
    }

    function startSlideshow() {
        intervalId = setInterval(function() {
            moveToLocationView(currentLocationIndex, currentViewIndex);
            currentViewIndex = (currentViewIndex + 1) % locations[currentLocationIndex].cameraViews.length;

            if (currentViewIndex === 0) {
                currentLocationIndex = (currentLocationIndex + 1) % locations.length;
            }
        }, 8000);

        document.getElementById('progress-bar').style.visibility = 'visible'; 
        document.getElementById('progress-bar').style.transition = 'none'; 
        document.getElementById('progress-bar').style.width = '0%';

        progressIntervalId = setInterval(function() {
            var progress = (currentLocationIndex + currentViewIndex / locations[currentLocationIndex].cameraViews.length) / locations.length * 100;
            document.getElementById('progress-bar').style.width = progress + '%';
        }, 100);
    }

    function stopSlideshow() {
        clearInterval(intervalId);
        clearInterval(progressIntervalId);
        intervalId = null;
        progressIntervalId = null;
        document.getElementById('progress-bar').style.visibility = 'hidden'; 
        document.getElementById('progress-bar').style.width = '0%';
    }

    document.getElementById('slideshowButton').addEventListener('click', function() {
        if (slideshowRunning) {
            stopSlideshow();
        } else {
            startSlideshow();
        }
        slideshowRunning = !slideshowRunning;
    });

    locations.forEach(location => {
        viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(location.longitude, location.latitude, 0.0),
            model: {
                uri: location.model,
                scale: location.scale,
                minimumPixelSize: 45,
                maximumScale: 20000000.0
            },
            orientation: Cesium.Transforms.headingPitchRollQuaternion(
                Cesium.Cartesian3.fromDegrees(location.longitude, location.latitude, 0.0),
                new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(0), Cesium.Math.toRadians(0), Cesium.Math.toRadians(0))
            ),
            description: location.description
        });
    });

    const hoverCard = document.getElementById('hover-card');
    viewer.screenSpaceEventHandler.setInputAction((movement) => {
        const pickedObject = viewer.scene.pick(movement.endPosition);
        if (Cesium.defined(pickedObject) && pickedObject.id) {
            hoverCard.style.display = 'block';
            hoverCard.style.left = `${movement.endPosition.x + 10}px`;
            hoverCard.style.top = `${movement.endPosition.y + 10}px`;
            hoverCard.innerHTML = `<div>${pickedObject.id.description}</div>`;
        } else {
            hoverCard.style.display = 'none';
        }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

    viewer.screenSpaceEventHandler.setInputAction((click) => {
        const pickedObject = viewer.scene.pick(click.position);
        if (Cesium.defined(pickedObject) && pickedObject.id) {
            hoverCard.style.display = 'block';
            hoverCard.style.left = `${click.position.x + 10}px`;
            hoverCard.style.top = `${click.position.y + 10}px`;
            hoverCard.innerHTML = `<div>${pickedObject.id.description}</div>`;
        } else {
            hoverCard.style.display = 'none';
        }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

    console.log('Entities added:', viewer.entities.values);
});