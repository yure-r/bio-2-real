/**
 * @module SimpleRenderer 
 * SimpleRenderer helps visualizing the entities in the BoidsController and controls the camera.
 */
export default class SimpleRenderer {
    constructor({boidsController}, scene) {
        this.boidsController = boidsController;
        this.scene = scene
        console.log(this.scene)
        this.isDragging = false;
        this.mouseX = 0;
        this.mouseY = 0;
        this.degX = 45;
        this.degY = 60;
        const b = this.boidsController.getBoundary();
        this.cameraMax = Math.max(b[0], b[1], b[2]);
        // this.cameraRadius = this.cameraMax*2/3;
      this.cameraRadius = 200;
        // this.lockOn = true;
    }

    init() {
        // this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 200000 );
        // this.camera.position.z = 0;
        // this.camera.autoRotate = true;
        // this.camera.translateY(-200)
        // this.camera.update = 
     
        // this.scene = new THREE.Scene();
        // this.scene.background = new THREE.Color( 0xffffff );
     
        // this.scene.add(this.camera)   
      

    
//     // const ambientLight = new THREE.HemisphereLight(0xddeeff, 0x0f0e0d, 2);

//     mainLight.position.set(-30, 10, -20);
    // mainLight.castShadow = true;
    this.mainLight = new THREE.PointLight(0xffffff, 50);
    this.mainLight.shadow.mapSize.width = 256;
    this.mainLight.shadow.mapSize.height = 256;
    this.mainLight.shadow.camera.near = 0.5;
    this.mainLight.shadow.camera.far = 1000;

// this.lightGroup = new THREE.Group()
// let entityGeom = new THREE.BoxGeometry( 2, 2, 4 );
// this.lightGroup.add(this.mainLight)
// this.lightGroup.add(entityGeom)

        
        this.entityGeometry = new THREE.BoxGeometry( 0.4, 0.4, 0.4 );
        this.entityGeometry.light = this.mainLight
        // this.entityGeometry.add(mainLight)

        // console.log(this.entityGeometry.light)
        this.obstacleGeometry = new THREE.SphereGeometry( 1, 1, 1 );

        // let color = new THREE.Color( 0xffffff );
      function totesRando(min, max) {
  return Math.random() * (max - min) + min
}
      
          let color = new THREE.Color( 0xffffff );
          // color.setHex( Math.random() * 0xffffff );


          let colorChoiceObject 

          if(colorMixed){
          // var color = ["0xffffff", "0xb08d57", "0xFFD700", "red", "blue", "purple"] //silver, bronze, gold, red, blue, purple, mixed
          const actualcolorreal = Math.floor(fxrand() * color.length);
          colorChoiceObject = color[actualcolorreal]
          } else {
          //if color is not mixed
          colorChoiceObject = colorChoice
          }

          // colorChoiceObject = 'red'

          



          



          const newMaterial = new THREE.MeshPhongMaterial({
          color: colorChoiceObject,
          wireframe: wireframe,
          // opacity:1,
          // transparent: false,
          // side: THREE.DoubleSide,
          // depthWrite: true,
          // depthTest: true,
          flatShading: false
      });


        //   let material = new THREE.MeshLambertMaterial({color:color, emissive:color})
      
        this.entityMaterial = newMaterial;




        let lightMaterial = new THREE.MeshLambertMaterial({color:new THREE.Color( 'red' ), emissive:new THREE.Color( 'white' ), wireframe: wireframe})
      
        this.entityLightMaterial = lightMaterial;
        // this.entityMaterial.color.set(0xffffff)
      
      
      
        this.obstacleMaterial = new THREE.MeshNormalMaterial();

        this.createGridVisual(this.boidsController.subDivisionCount);

        // create boundary
                    // const b = this.boidsController.getBoundary();
                    // const geometry = new THREE.BoxGeometry(b[0], b[1], b[2]);
                    // const wireframe = new THREE.EdgesGeometry(geometry);
                    // const line = new THREE.LineSegments(wireframe);
                    // line.material.color = new THREE.Color( 0xffffff );
                    // line.material.transparent = false;
                    // line.position.x = b[0]/2;
                    // line.position.y = b[1]/2;
                    // line.position.z = b[2]/2;
                    // this.scene.add(line);
     
        // this.renderer = new THREE.WebGLRenderer({ antialias: true });
        // this.renderer.setSize(window.innerWidth, window.innerHeight);
        // document.body.appendChild(this.renderer.domElement);

        // this.renderer.domElement.addEventListener('mousedown', this.onMouseDown.bind(this));
        // this.renderer.domElement.addEventListener('mouseup', this.onMouseUp.bind(this));
        // this.renderer.domElement.addEventListener('mousemove', this.onMouseMove.bind(this));
        // this.renderer.domElement.addEventListener('wheel', this.onMouseWheel.bind(this));
        // this.renderer.domElement.addEventListener('touchstart', this.touchStart.bind(this), false);
        // this.renderer.domElement.addEventListener('touchmove', this.touchMove.bind(this), false);
        // this.renderer.domElement.addEventListener('touchend', this.touchEnd.bind(this), false);

        // this.updateCamera();
        // this.render();
      
            // var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
// camera.position.set(0, 20, 40);
// var renderer = new THREE.WebGLRenderer({antialias: true});
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// var controls = new THREE.OrbitControls(camera, renderer.domElement);


// var gC = 0x660066;
// scene.add(new THREE.GridHelper(50, 25, gC, gC));

// var planeGeometry = new THREE.PlaneBufferGeometry(32000, 32000, 2000, 2000);
// planeGeometry.rotateX(-Math.PI * 0.5);
// planeGeometry.position.x = 500
// planeGeometry.translateX(1000)

// var heat = new THREE.Mesh(planeGeometry, new THREE.ShaderMaterial({
//   uniforms: {
//     heightMap: {value: heightMap},
//     heightRatio: {value: 3000},
//     heightBias: {value: 0},
//     gradientMap: {value: gradientMap}
//   },
//   vertexShader: heatVertex,
//   fragmentShader: heatFragment
// }));
      
      

// this.scene.add(heat);
// heat.translateX(16000)
// heat.translateZ(16000)
// heat.translateY(-2000)
      

          
          // const geometry = new THREE.BoxGeometry( 32000, 8000, 32000 );
          // const material2 = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
          // const cube = new THREE.Mesh( geometry, material2 );
          // // scene.add( cube );
          //       this.scene.add(cube)
          // cube.translateX(16000)
          // cube.translateZ(16000)
          //END GROUP FOR BRIDGES?
      
      
    //         for (var i=0; i<800; i+=4){
    //           for (var j=0; j<800; j+=4){
                
    //             if (Math.random() > 0){
                  
                  
    //               // if ({
    //               // var imgd = x, y, width, height);
    //               let imgheight = ctx.getImageData((i/800)*8000, (j/800)*8000,1,1).data[0]/255
    //                  if(imgheight < 0.35 && imgheight > 0.3){
                       
                     
    //                   // }
                  
    //       const geometry = new THREE.BoxGeometry( 160, 100, 160 );
    //       const material2 = new THREE.MeshPhysicalMaterial( {color: 0x2b2b2b, roughness:1,metalness:0,reflectivity:0.5,wireframe:true} );
    //       const cube = new THREE.Mesh( geometry, material2 );
                       
    //       const geometry2 = new THREE.BoxGeometry( 128, 1500, 128 );
    //       // const material3 = new THREE.MeshPhysicalMaterial( {color: 0x2b2b2b, roughness:1,metalness:0,reflectivity:0.5} );
    //       const cube2 = new THREE.Mesh( geometry2, material2 );
                       
    //       // scene.add( cube );
    //       this.scene.add(cube)
    //       cube.translateX((i*40))
    //       cube.translateZ((j*40))
    //       cube.translateY((-700))
                       
                       
    //       this.scene.add(cube2)
    //       cube2.translateX((i*40))
    //       cube2.translateZ((j*40))
    //       cube2.translateY((-1500))
                
    //             }
    //             }
                

                
                
    //   }
    //   }

      
      
      
// cube.translateY(000)

      

      
      
              // new Entity(Entity.OBSTACLE_ENTITY, x, y, z);
            // this.boidsController.addObstacleEntity(heat);

// var gui = new dat.GUI();
// gui.add(heat.material.uniforms.heightRatio, "value", 1, 15).name("heightRatio");
// gui.add(heat.material.uniforms.heightBias, "value", 0, 10).name("heightBias");

// window.addEventListener( 'resize', onWindowResize, false );

// render();
// function render(){
  // requestAnimationFrame(render);
  // renderer.render(scene, camera);
// }

// function onWindowResize() {

//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();

//   renderer.setSize( window.innerWidth, window.innerHeight );

// }
      
      
      
      
    }

    createGridVisual(subdivisionCount) {
        this.gridVisual = new THREE.Group();
        const b = this.boidsController.getBoundary();
        const maxLen = Math.max(b[0], b[1], b[2]);
        const len = maxLen/subdivisionCount;
        for(let x=0; x<subdivisionCount; x++) {
            for(let y=0; y<subdivisionCount; y++) {
                for(let z=0; z<subdivisionCount; z++) {
                    if((x+0.5)*len > b[0] || (y+0.5)*len > b[1] || (z+0.5)*len > b[2]) {
                        continue;
                    }

                    // create boundary wireframe
                    const geometry = new THREE.BoxGeometry(len, len, len);
                    const wireframe = new THREE.EdgesGeometry(geometry);
                    const line = new THREE.LineSegments(wireframe);
                    //line.material.depthTest = false;
                    line.material.color = new THREE.Color( 0x999999 );
                    line.material.transparent = false;
                    line.position.x = len/2 + x*len;
                    line.position.y = len/2 + y*len;
                    line.position.z = len/2 + z*len;
                    //this.scene.add(line);
                    this.gridVisual.add(line);
                }
            }
        }

        this.scene.add(this.gridVisual);
        this.gridVisual.visible = false;
    }

    touchStart(e) {
        const t = e.changedTouches[0];
        this.mouseX = t.pageX;
        this.mouseY = t.pageY;
        this.isDragging = true;
    }

    touchEnd(e) {
        this.isDragging = false;
    }

    touchMove(e) {
        if(!this.isDragging) {
            return;
        }

        e.preventDefault();

        const t = e.changedTouches[0];

        const dx = t.pageX - this.mouseX;
        const dy = t.pageY - this.mouseY;

        this.mouseX = t.pageX;
        this.mouseY = t.pageY;

        this.degX += dx;
        if(this.degX > 360) this.degX = 0;
        if(this.degX < 0) this.degX = 360;

        this.degY += dy/3;
        this.degY = Math.max(0.1, this.degY);
        this.degY = Math.min(179.9, this.degY);
        
        this.updateCamera();
    }

    onMouseDown(e) {
        this.isDragging = true;
        this.mouseX = e.offsetX;
        this.mouseY = e.offsetY;
    }

    onMouseMove(e) {
        if(!this.isDragging) {
            return;
        }
    
        const dx = e.offsetX - this.mouseX;
        const dy = e.offsetY - this.mouseY;

        this.mouseX = e.offsetX;
        this.mouseY = e.offsetY;
    
        this.degX += dx;
        if(this.degX > 360) this.degX = 0;
        if(this.degX < 0) this.degX = 360;

        this.degY += dy/3;
        this.degY = Math.max(0.1, this.degY);
        this.degY = Math.min(179.9, this.degY);
        
        this.updateCamera();
    }

    onMouseUp(e) {
        this.isDragging = false;
    }

    onMouseWheel(e) {
        e.preventDefault();
        this.cameraRadius += e.deltaY * -1;
        this.cameraRadius = Math.max(1, this.cameraRadius);
        this.cameraRadius = Math.min(this.cameraMax, this.cameraRadius);
        this.updateCamera();
    }

    updateCamera() {
        let mx=0, my=0, mz=0;
        const entities = this.boidsController.getFlockEntities();
        if(this.lockOn && entities.length > 0) {
            const mesh = entities[0].mesh;
            mx = mesh.position.x;
            my = mesh.position.y;
            mz = mesh.position.z;
        } else {
            const b = this.boidsController.getBoundary();
            mx = (b[0]/2);
            my = (b[1]/2)-350;
            mz = (b[2]/2);
        }

        const degXPI = this.degX*Math.PI/180;
        const degYPI = this.degY*Math.PI/180;
        this.camera.position.x = mx + Math.sin(degXPI)*Math.sin(degYPI)*this.cameraRadius;
        this.camera.position.z = mz + Math.cos(degXPI)*Math.sin(degYPI)*this.cameraRadius;
        this.camera.position.y = my + Math.cos(degYPI)*this.cameraRadius;

        this.camera.lookAt(mx, my, mz);
        // this.camera.update();
    }

    render() {
        const entities = this.boidsController.getFlockEntities();
        entities.forEach(entity => {
            // console.log(entity)
            const x = entity.x;
            const y = entity.y;
            const z = entity.z;
            const vx = entity.vx;
            const vy = entity.vy;
            const vz = entity.vz;
            let mesh = entity.mesh;
            let light = entity.light
            let lightchance = entity.lightchance
            let lightState = entity.lightstate
            let trueLightState = entity.trueLightState

            if (!lightchance){
            entity.lightchance = 0.05
            }
            // console.log(lightState)
            if (entity.lightstate == undefined){
            entity.lightstate = false;
            }
            // console.log(entity.trueLightState, entity.lightchance)
            if(entity.trueLightState == undefined){
                entity.trueLightState = false;
            }

            if(!mesh) {
                mesh = new THREE.Mesh(this.entityGeometry, this.entityMaterial);
                mesh.localVelocity = {x: 0, y: 0, z: 0};
                this.scene.add(mesh);
                entity.mesh = mesh;
            }

            if(!light && entity.lightstate == false && fxrand()<entity.lightchance){
                console.log("no light!")
                light = new THREE.PointLight(0xffffff, 10);
                light.castShadow = false;
                light.shadow.mapSize.width = 256;
                light.shadow.mapSize.height = 256;
                light.shadow.camera.near = 0.5;
                light.shadow.camera.far = 1000;
                this.scene.add(light)
                entity.light = light
                entity.lightstate = true;
                // console.log(lightchance)
                console.log("set true light state to true!")
                entity.trueLightState = true;
                // entity.material.dispose()
                // entity.material = this.entityLightMaterial
                mesh.material = this.entityLightMaterial

            } else {
                entity.lightstate = true;
                entity.trueLightState = false;
            }

                        // apply asymptotic smoothing
                        mesh.position.x = 0.9*mesh.position.x + 0.1*x;
                        mesh.position.y = 0.9*mesh.position.y + 0.1*y;
                        mesh.position.z = 0.9*mesh.position.z + 0.1*z;
                        mesh.localVelocity.x = 0.9*mesh.localVelocity.x + 0.1*vx;
                        mesh.localVelocity.y = 0.9*mesh.localVelocity.y + 0.1*vy;
                        mesh.localVelocity.z = 0.9*mesh.localVelocity.z + 0.1*vz;
            
                        mesh.lookAt(mesh.position.x + mesh.localVelocity.x,
                                    mesh.position.y + mesh.localVelocity.y,
                                    mesh.position.z + mesh.localVelocity.z);


            if(light){
                if( Math.sin(sunAngle) < Math.sin(0) && Math.sin(sunAngle) < Math.sin(-Math.PI/9)){
                    // light.castShadow = true;
                    // console.log("light is visible")
                    // light.visible = true;

                } else {
                    // light.visible = false;
                    // console.log("light is not visible")
                    // light.castShadow = false;
                }
                
                // mesh.material.color.setHex(0xff0000);
                // mesh.material.emissive.setHex(0xff0000);
                light.position.x = 0.9*mesh.position.x + 0.1*x;
                light.position.y = 0.9*mesh.position.y + 0.1*y;
                light.position.z = 0.9*mesh.position.z + 0.1*z;
            }

            // light.localVelocity.x = 0.9*mesh.localVelocity.x + 0.1*vx;
            // light.localVelocity.y = 0.9*mesh.localVelocity.y + 0.1*vy;
            // light.localVelocity.z = 0.9*mesh.localVelocity.z + 0.1*vz;

            // light.lookAt(mesh.position.x + mesh.localVelocity.x,
            //             mesh.position.y + mesh.localVelocity.y,
            //             mesh.position.z + mesh.localVelocity.z);
        });

        const obstacles = this.boidsController.getObstacleEntities();
        obstacles.forEach(entity => {
            const x = entity.x;
            const y = entity.y;
            const z = entity.z;
            let mesh = entity.mesh;
            if(!mesh) {
                mesh = new THREE.Mesh(this.obstacleGeometry, this.obstacleMaterial);
                this.scene.add(mesh);
                entity.mesh = mesh;
            }
            
            mesh.position.x = x;
            mesh.position.y = y;
            mesh.position.z = z;
        });

        if(this.lockOn && entities.length > 0) {
            this.updateCamera();
        }
  
        // this.camera.update();
        // this.camera.updateProjectionMatrix();
        // this.renderer.render(this.scene, this.camera);
    }
}