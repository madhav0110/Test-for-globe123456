document.addEventListener('DOMContentLoaded', () => {
    // Set your Cesium Ion Access Token here
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyYzBmM2QwOS1lYTY1LTRjZjctYWE4My00NGM4MjRkZDJmNTYiLCJpZCI6MjM1ODI3LCJpYXQiOjE3MjQxNDA4NjJ9.03WlBZtttyWCNKOdpCLyYPCpwVTqcQYY5CXKfNz--6w'; // Replace with your actual token

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
            longitude: 72.4260, 
            latitude: 23.0278, 
            altitude: 10.0,
            description: '<div><h3>Anant University - (Phase II)</h3><p>Student Housing, Academic Blocks constructed in Phase 2 of the Anant University Expansion.</p></div>',
            pinDescription: '<div><h3>Anant University - (Phase II)</h3><p>Ahmedabad, Gujarat</p></div>',
            model: 'Assets/basic_factory_modeling.glb',
            scale: 10,
            cameraViews: [
                { // Top view
                    longitude: 72.4260,
                    latitude: 23.0278,
                    altitude: 2000.0,
                    heading: Cesium.Math.toRadians(0),
                    pitch: Cesium.Math.toRadians(-90),
                    roll: Cesium.Math.toRadians(0)
                },
                { // Side view
                    longitude: 72.4260 -0.008, // Adjusted longitude offset
                    latitude: 23.0278,
                    altitude: 300.0,
                    heading: Cesium.Math.toRadians(90), // Facing towards the side
                    pitch: Cesium.Math.toRadians(-30),
                    roll: Cesium.Math.toRadians(0)
                }
            ],
            modelOrientation: {
                heading: Cesium.Math.toRadians(0), // Example heading
                pitch: Cesium.Math.toRadians(0),   // Example pitch
                roll: Cesium.Math.toRadians(0)      // Example roll
            }
        },
        {
            longitude: 73.735145, 
            latitude: 18.67976, 
            altitude: 20.0,
            description: '<div><h3>Pune Metro Line 03 (PMR -10)</h3><p>Pune Metro Line 03 is of 23 km length elevated metro corridor consists 23 stations. Currently we are working on one specific Metro Station PMR10 at Balewadi Stadium.</p></div>',
            pinDescription: '<div><h3>Pune Metro Line 03 (PMR -10)</h3><p>Pune, Maharashtra (Shivajinagar to Hinjewadi)</p></div>',
            model: 'Assets/elevated_mumbai_metro_station.glb',
            scale: 0.0008,
            cameraViews: [
                { // Top view
                    longitude: 73.734543,
                    latitude: 18.680418,
                    altitude: 1000.0,
                    heading: Cesium.Math.toRadians(0),
                    pitch: Cesium.Math.toRadians(-90),
                    roll: Cesium.Math.toRadians(0)
                },
                { // Side view
                    longitude: 73.734543 -0.002, // Adjusted longitude offset
                    latitude: 18.680418,
                    altitude: 100.0,
                    heading: Cesium.Math.toRadians(90), // Facing towards the side
                    pitch: Cesium.Math.toRadians(-30),
                    roll: Cesium.Math.toRadians(0)
                }
            ],
            modelOrientation: {
                heading: Cesium.Math.toRadians(-40), // Example heading
                pitch: Cesium.Math.toRadians(0),   // Example pitch
                roll: Cesium.Math.toRadians(0)     // Example roll
            }
        },
        {
            longitude: 72.375511, 
            latitude: 22.991289, 
            altitude: 1000.0,
            description: '<div><h3>Micron Factory, Sanand</h3><p>Semiconductor Manufacturing Facility. We are working on the Phase 1 of the project with Tata Projects.</p></div>',
            pinDescription: '<div><h3>Micron Factory, Sanand</h3><p>Ahmedabad, Gujarat</p></div>',
            model: 'Assets/metallic_showroom_gallery.glb',
            scale: 0.3,
            cameraViews: [
                { // Top view
                    longitude: 72.375511,
                    latitude: 22.991289,
                    altitude: 2000.0,
                    heading: Cesium.Math.toRadians(0),
                    pitch: Cesium.Math.toRadians(-90),
                    roll: Cesium.Math.toRadians(0)
                },
                { // Side view
                    longitude: 72.375511 -0.008, // Adjusted longitude offset
                    latitude: 22.991289,
                    altitude: 500.0,
                    heading: Cesium.Math.toRadians(90), // Facing towards the side
                    pitch: Cesium.Math.toRadians(-30),
                    roll: Cesium.Math.toRadians(0)
                }
            ],
            modelOrientation: {
                heading: Cesium.Math.toRadians(0), // Example heading
                pitch: Cesium.Math.toRadians(0),   // Example pitch
                roll: Cesium.Math.toRadians(0)      // Example roll
            }
        },
        {
            longitude: 85.0139, 
            latitude: 20.9051, 
            altitude: 1000.0,
            description: '<div><h3>Angul Plant</h3><p>Coke Oven and Blast Furnace Plant from JSOL at Angul</p></div>',
            pinDescription: '<div><h3>Angul Plant</h3><p> Angul, Odisha</p></div>',
            model: 'Assets/mv_spartan.glb',
            scale: 30,
            cameraViews: [
                { // Top view
                    longitude: 85.0139,
                    latitude: 20.9051,
                    altitude: 2000.0,
                    heading: Cesium.Math.toRadians(0),
                    pitch: Cesium.Math.toRadians(-90),
                    roll: Cesium.Math.toRadians(0)
                },
                { // Side view
                    longitude: 85.0139 -0.008, // Adjusted longitude offset
                    latitude: 20.9051,
                    altitude: 500.0,
                    heading: Cesium.Math.toRadians(90), // Facing towards the side
                    pitch: Cesium.Math.toRadians(-30),
                    roll: Cesium.Math.toRadians(0)
                }
            ],
            modelOrientation: {
                heading: Cesium.Math.toRadians(0), // Example heading
                pitch: Cesium.Math.toRadians(0),   // Example pitch
                roll: Cesium.Math.toRadians(0)     // Example roll
            }
        },
        {
            longitude: 72.23992864, 
            latitude: 22.50840567, 
            altitude: 1000.0,
            description: '<div><h3>Lothal Museum (NMHC)</h3><p>National Maritime Heritage Complex is the Heritage Museum being built at Lothal. We are working on Phase IA of the project.</p></div>',
            pinDescription: '<div><h3>Lothal Museum (NMHC)</h3><p>Ahmedabad, Gujarat</p></div>',
            model: 'Assets/Lothal textured mesh.glb',
            scale: 200,
            cameraViews: [
                { // Top view
                    longitude: 72.23992864,
                    latitude: 22.50840567,
                    altitude: 2000.0,
                    heading: Cesium.Math.toRadians(0),
                    pitch: Cesium.Math.toRadians(-90),
                    roll: Cesium.Math.toRadians(0)
                },
                { // Side view
                    longitude: 72.23992864 -0.008, // Adjusted longitude offset
                    latitude: 22.50840567,
                    altitude: 500.0,
                    heading: Cesium.Math.toRadians(90), // Facing towards the side
                    pitch: Cesium.Math.toRadians(-30),
                    roll: Cesium.Math.toRadians(0)
                }
            ],
            modelOrientation: {
                heading: Cesium.Math.toRadians(0), // Example heading
                pitch: Cesium.Math.toRadians(0),    // Example pitch
                roll: Cesium.Math.toRadians(0)     // Example roll
            }
        }
    ];
    

     // Slideshow and progress bar logic
     var slideshowRunning = false;
     var currentLocationIndex = 0;
     var currentViewIndex = 0;
     var intervalId = null;
     var progressIntervalId = null;
     var progressWidth = 0;
     var progressRunning = false;
 
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
             duration: 3.0,
             complete: function() {
                 // Restart progress bar after moving to the new location
                 resetProgressBar();
             }
         });
     }
     
 
     function startSlideshow() {
         intervalId = setInterval(function() {
             moveToLocationView(currentLocationIndex, currentViewIndex);
             currentViewIndex = (currentViewIndex + 1) % locations[currentLocationIndex].cameraViews.length;
 
             if (currentViewIndex === 0) {
                 currentLocationIndex = (currentLocationIndex + 1) % locations.length;
             }
         }, 5000);
 
         if (!progressRunning) {
             resetProgressBar(); // Initialize progress bar for the first location
         }
     }
 
     function stopSlideshow() {
         clearInterval(intervalId);
         clearInterval(progressIntervalId);
         intervalId = null;
         progressIntervalId = null;
         progressRunning = false;
         document.getElementById('progress-bar').style.visibility = 'hidden'; 
         document.getElementById('progress-bar').style.width = progressWidth + '%';
     }
 
     function resetProgressBar() {
         if (progressRunning) {
             clearInterval(progressIntervalId);
         }
         document.getElementById('progress-bar').style.visibility = 'visible'; 
         document.getElementById('progress-bar').style.transition = 'none'; 
         document.getElementById('progress-bar').style.width = '0%';
 
         progressWidth = 0;
         progressRunning = true;
         progressIntervalId = setInterval(function() {
             progressWidth += 1;
             document.getElementById('progress-bar').style.width = progressWidth + '%';
             if (progressWidth >= 100) {
                 clearInterval(progressIntervalId);
                 progressRunning = false;
             }
         }, 20); // Adjust the interval duration to match the transition time
     }
 
     document.getElementById('slideshowButton').addEventListener('click', function() {
         if (slideshowRunning) {
             stopSlideshow();
         } else {
             startSlideshow();
         }
         slideshowRunning = !slideshowRunning;
     });
 
     // Add 3D models and pins to the viewer
     locations.forEach(location => {
        // Add 3D model
        viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(location.longitude, location.latitude, 0.0),
            model: {
                uri: location.model,
                scale: location.scale,
                minimumPixelSize: 15,
                maximumScale: 20000000.0
            },
            orientation: Cesium.Transforms.headingPitchRollQuaternion(
                Cesium.Cartesian3.fromDegrees(location.longitude, location.latitude, 0.0),
                new Cesium.HeadingPitchRoll(
                    location.modelOrientation.heading,
                    location.modelOrientation.pitch,
                    location.modelOrientation.roll
                )
            ),
            description: location.description
        });
    
        // Add pin at the location
        const pinEntity = viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(location.longitude, location.latitude, location.altitude),
            billboard: {
                image: 'Assets/Dotmarker.svg', // Path to your pin image
                scale: 0.05,
                show: true // Initially show the pin
            },
            id: `pin-${location.longitude}-${location.latitude}`,
            description: location.pinDescription, // Pin description
        });
    
        // Event listener to hide/show the pin based on camera altitude
        viewer.camera.changed.addEventListener(() => {
            const cameraAltitude = viewer.camera.positionCartographic.height;
    
            if (cameraAltitude < 10000) {
                pinEntity.billboard.show = false; // Hide the pin
            } else {
                pinEntity.billboard.show = true; // Show the pin
            }
        });
    });
    
 
    // Define styles for hover cards
    const pinHoverCardClass = 'pin-hover-card';
    const modelHoverCardClass = 'model-hover-card';


    // Hover card logic for displaying details on hover
    const hoverCard = document.getElementById('hover-card');
    viewer.screenSpaceEventHandler.setInputAction((movement) => {
        const pickedObject = viewer.scene.pick(movement.endPosition);
        if (Cesium.defined(pickedObject) && pickedObject.id) {
            // Determine the type of picked object and set hover card class accordingly
            const entity = pickedObject.id;
            const isPin = entity.id && entity.id.startsWith('pin-');
            const cardClass = isPin ? pinHoverCardClass : modelHoverCardClass;
            
            hoverCard.className = cardClass; // Apply the appropriate class
            hoverCard.style.display = 'block';
            hoverCard.style.left = `${movement.endPosition.x + 10}px`;
            hoverCard.style.top = `${movement.endPosition.y + 10}px`;
            hoverCard.innerHTML = `<div>${entity.description}</div>`;
        } else {
            hoverCard.style.display = 'none';
        }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

    // Click event logic for displaying details on click
    viewer.screenSpaceEventHandler.setInputAction((click) => {
        const pickedObject = viewer.scene.pick(click.position);
        if (Cesium.defined(pickedObject) && pickedObject.id) {
            // Determine the type of picked object and set hover card class accordingly
            const entity = pickedObject.id;
            const isPin = entity.id && entity.id.startsWith('pin-');
            const cardClass = isPin ? pinHoverCardClass : modelHoverCardClass;
            
            hoverCard.className = cardClass; // Apply the appropriate class
            hoverCard.style.display = 'block';
            hoverCard.style.left = `${click.position.x + 10}px`;
            hoverCard.style.top = `${click.position.y + 10}px`;
            hoverCard.innerHTML = `<div>${entity.description}</div>`;
        } else {
            hoverCard.style.display = 'none';
        }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

    console.log('Entities added:', viewer.entities.values);
});