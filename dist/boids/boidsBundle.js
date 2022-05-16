(()=>{"use strict";let t=0;class i{constructor(i,e=0,s=0,o=0,n=0,h=0,a=0){this.id=++t,this.type=i,this.x=e,this.y=s,this.z=o,this.vx=n,this.vy=h,this.vz=a,this.grid=void 0,this.mesh=void 0,this.FLOCK_ENTITY=1,this.OBSTACLE_ENTITY=1}setGrid(t){this.grid=t}getType(){return this.type}getVelocity(){return Math.sqrt(this.vx*this.vx+this.vy*this.vy+this.vz*this.vz)}checkVelocity(t=1){const i=this.getVelocity();i>t&&i>0&&(this.vx=t*this.vx/i,this.vy=t*this.vy/i,this.vz=t*this.vz/i)}addVelocity(t,i,e){this.vx+=t,this.vy+=i,this.vz+=e}move(t,i,e,s){this.checkVelocity(t);let o=this.x+this.vx,n=this.y+this.vy,h=this.z+this.vz;o=Math.max(0,o),o=Math.min(i,o),n=Math.max(0,n),n=Math.min(e,n),h=Math.max(0,h),h=Math.min(s,h),this.grid.moveEntity(this,o,n,h)}getDistance(t){const i=this.x-t.x,e=this.y-t.y,s=this.z-t.z;return Math.sqrt(i*i+e*e+s*s)}serialize(){const{id:t,type:i,x:e,y:s,z:o,vx:n,vy:h,vz:a}=this;return{id:t,type:i,x:e,y:s,z:o,vx:n,vy:h,vz:a}}updateData(t){this.id==t.id&&(this.vx=t.vx,this.vy=t.vy,this.vz=t.vz,this.grid.moveEntity(this,t.x,t.y,t.z))}static deserialize(t){const e=new i(t.type,t.x,t.y,t.z,t.vx,t.vy,t.vz);return e.id=t.id,e}}class e{constructor(t,i){this.worldSize=t,this.cellSize=i,this.cellRowCount=this.worldSize/this.cellSize|0,this.cellCount=this.cellRowCount*this.cellRowCount*this.cellRowCount,this.entityList=[];for(let t=0;t<this.cellCount;t++)this.entityList[t]=[]}getWorldSize(){return this.worldSize}getGridRowCount(){return this.cellRowCount}getGridIndex(t,i,e){let s=t/this.cellSize|0,o=i/this.cellSize|0,n=e/this.cellSize|0;return s<0?s=0:s>this.cellRowCount-1&&(s=this.cellRowCount-1),o<0?o=0:o>this.cellRowCount-1&&(o=this.cellRowCount-1),n<0?n=0:n>this.cellRowCount-1&&(n=this.cellRowCount-1),0|s+o*this.cellRowCount+n*this.cellRowCount*this.cellRowCount}addEntity(t){const i=0|this.getGridIndex(t.x,t.y,t.z);t.setGrid(this),this.entityList[i].push(t)}removeEntity(t){const i=0|this.getGridIndex(t.x,t.y,t.z),e=this.entityList[i],s=e.indexOf(t);if(-1==s)throw"removeEntity() can not find the entity to be removed!";e.splice(s,1),t.setGrid(void 0)}moveEntity(t,i,e,s){const o=0|this.getGridIndex(t.x,t.y,t.z),n=0|this.getGridIndex(i,e,s);if(o==n)return t.x=i,t.y=e,void(t.z=s);const h=this.entityList[o],a=h.indexOf(t);if(-1==a)throw"moveEntity() can not find the entity to be removed!";h.splice(a,1),t.x=i,t.y=e,t.z=s,this.entityList[n].push(t)}getEntitiesInGrid(t,i,e){const s=0|this.getGridIndex(t,i,e);return this.entityList[s]}getEntitiesInGridIndex(t){if(t<0||t>=this.cellCount)throw"getEntitiesInGridIndex() out of bounds!";return this.entityList[0|t]}getEntitiesInCube(t,i,e,s,o){const n=this.getGridIndex(t-s,i-s,e-s),h=this.getGridIndex(t+s,i-s,e-s),a=this.getGridIndex(t-s,i+s,e-s),r=this.getGridIndex(t+s,i+s,e+s),l=n,d=h-n+1,c=(a-n)/this.cellRowCount+1|0,u=(r-n)/(this.cellRowCount*this.cellRowCount)+1|0;for(let n=0;n<u;n++)for(let h=0;h<c;h++)for(let a=0;a<d;a++){const r=l+n*this.cellRowCount*this.cellRowCount+h*this.cellRowCount+a;if(r>=this.cellCount)continue;const d=this.entityList[r],c=d.length;for(let n=0;n<c;n++){const h=d[n];void 0!==h&&h.x>=t-s&&h.x<=t+s&&h.y>=i-s&&h.y<=i+s&&h.z>=e-s&&h.z<=e+s&&o(h)}}}}class s{constructor(t=2e3,i=1e3,s=2e3,o=1){const n=Math.max(t,i,s);this.grid=new e(n,n/o),this.subDivisionCount=o,this.flockEntities=[],this.obstacleEntities=[],this.boundaryX=t,this.boundaryY=i,this.boundaryZ=s,this.aligmentWeight=3,this.cohesionWeight=3.4,this.separationWeight=.3,this.maxEntitySpeed=.5,this.aligmentRadius=30,this.cohesionRadius=30,this.separationRadius=30,this.obstacleRadius=30}addFlockEntity(t){this.grid.addEntity(t),this.flockEntities.push(t)}getFlockEntities(){return this.flockEntities}addObstacleEntity(t){this.grid.addEntity(t),this.obstacleEntities.push(t)}getObstacleEntities(){return this.obstacleEntities}getBoundary(){return[this.boundaryX,this.boundaryY,this.boundaryZ]}setMaxSpeed(t){this.maxEntitySpeed=t}setAligmentWeight(t){this.aligmentWeight=t}setCohesionWeight(t){this.cohesionWeight=t}setSeparationWeight(t){this.separationWeight=t}setBoundary(t,i,e){this.boundaryX=t,this.boundaryY=i,this.boundaryZ=e}iterate(t=0,i=this.flockEntities.length){for(let e=t;e<i;e++){const t=this.flockEntities[e],i=this.computeAlignment(t),s=this.computeCohesion(t),o=this.computeSeparation(t),n=this.computeObstacles(t),h=this.aligmentWeight*i[0]+this.cohesionWeight*s[0]+50*this.separationWeight*o[0]+100*n[0],a=this.aligmentWeight*i[1]+this.cohesionWeight*s[1]+50*this.separationWeight*o[1]+100*n[1],r=this.aligmentWeight*i[2]+this.cohesionWeight*s[2]+50*this.separationWeight*o[2]+100*n[2];t.addVelocity(h,a,r),t.move(this.maxEntitySpeed,this.boundaryX,this.boundaryY,this.boundaryZ)}}computeAlignment(t){let e=0,s=0,o=0,n=0;if(this.grid.getEntitiesInCube(t.x,t.y,t.z,this.aligmentRadius,(h=>{h!=t&&h.getType()==i.FLOCK_ENTITY&&t.getDistance(h)<this.aligmentRadius&&(n++,e+=h.vx,s+=h.vy,o+=h.vz)})),n>0){e/=n,s/=n,o/=n;const t=Math.sqrt(e*e+s*s+o*o);t>0&&(e/=t,s/=t,o/=t)}return[e,s,o]}computeCohesion(t){let e=0,s=0,o=0,n=0;if(this.grid.getEntitiesInCube(t.x,t.y,t.z,this.cohesionRadius,(h=>{h!=t&&h.getType()==i.FLOCK_ENTITY&&t.getDistance(h)<this.cohesionRadius&&(n++,e+=h.x,s+=h.y,o+=h.z)})),n>0){e/=n,s/=n,o/=n,e-=t.x,s-=t.y,o-=t.z;var h=Math.sqrt(e*e+s*s+o*o);h>0&&(e/=h,s/=h,o/=h)}return[e,s,o]}computeSeparation(t){let e=0,s=0,o=0;return this.grid.getEntitiesInCube(t.x,t.y,t.z,this.separationRadius,(n=>{let h=t.getDistance(n);if(h<=0&&(h=.01),n!=t&&n.getType()==i.FLOCK_ENTITY&&h<this.separationRadius){const i=t.x-n.x,a=t.y-n.y,r=t.z-n.z;e+=i/h/h,s+=a/h/h,o+=r/h/h}})),[e,s,o]}computeObstacles(t){let e=0,s=0,o=0;this.grid.getEntitiesInCube(t.x,t.y,t.z,this.obstacleRadius,(n=>{const h=t.getDistance(n);if(h>0&&n.getType()==i.OBSTACLE_ENTITY&&h<this.obstacleRadius){const i=t.x-n.x,a=t.y-n.y,r=t.z-n.z;e+=i/h/h,s+=a/h/h,o+=r/h/h}}));const n=this.obstacleRadius/4,h=this.boundaryX-t.x,a=this.boundaryY-t.y,r=this.boundaryZ-t.z;return t.x<n&&Math.abs(t.x)>0?e+=1/t.x:h<n&&h>0&&(e-=1/h),t.y<n&&Math.abs(t.y)>0?s+=1/t.y:a<n&&a>0&&(s-=1/a),t.z<n&&Math.abs(t.z)>0?o+=1/t.z:r<n&&r>0&&(o-=1/r),[e,s,o]}serialize(){const t=[],i=[];return this.flockEntities.forEach((i=>{t.push(i.serialize())})),this.obstacleEntities.forEach((t=>{i.push(t.serialize())})),{subDivisionCount:this.subDivisionCount,boundaryX:this.boundaryX,boundaryY:this.boundaryY,boundaryZ:this.boundaryZ,flockEntities:t,obstacleEntities:i,aligmentWeight:this.aligmentWeight,cohesionWeight:this.cohesionWeight,separationWeight:this.separationWeight,maxEntitySpeed:this.maxEntitySpeed,aligmentRadius:this.aligmentRadius,cohesionRadius:this.cohesionRadius,separationRadius:this.separationRadius,obstacleRadius:this.obstacleRadius}}serializeBoidsData(t=0,i=this.flockEntities.length){const e=[];for(let s=t;s<i;s++)e.push(this.flockEntities[s].serialize());return{start:t,flockEntities:e}}applyBoidsData(t){const i=t.start,e=t.flockEntities;for(let t=0;t<e.length;t++){const s=this.flockEntities[i+t],o=e[t];s.id==o.id?s.updateData(o):console.log("ids do not match!")}}static deserialize(t){const e=new s(t.boundaryX,t.boundaryY,t.boundaryZ,t.subDivisionCount);return e.aligmentWeight=t.aligmentWeight,e.cohesionWeight=t.cohesionWeight,e.separationWeight=t.separationWeight,e.maxEntitySpeed=t.maxEntitySpeed,e.aligmentRadius=t.aligmentRadius,e.cohesionRadius=t.cohesionRadius,e.separationRadius=t.separationRadius,e.obstacleRadius=t.obstacleRadius,t.flockEntities.forEach((t=>{const s=i.deserialize(t);e.addFlockEntity(s)})),t.obstacleEntities.forEach((t=>{const s=i.deserialize(t);e.addObstacleEntity(s)})),e}}class o{constructor({boidsController:t},i){this.boidsController=t,this.scene=i,console.log(this.scene),this.isDragging=!1,this.mouseX=0,this.mouseY=0,this.degX=45,this.degY=60;const e=this.boidsController.getBoundary();this.cameraMax=Math.max(e[0],e[1],e[2]),this.cameraRadius=200}init(){this.mainLight=new THREE.PointLight(16777215,50),this.mainLight.shadow.mapSize.width=256,this.mainLight.shadow.mapSize.height=256,this.mainLight.shadow.camera.near=.5,this.mainLight.shadow.camera.far=1e3,this.entityGeometry=new THREE.BoxGeometry(.4,.4,.4),this.entityGeometry.light=this.mainLight,this.obstacleGeometry=new THREE.SphereGeometry(1,1,1);let t,i=new THREE.Color(16777215);t=colorMixed?i[Math.floor(fxrand()*i.length)]:colorChoice;const e=new THREE.MeshPhongMaterial({color:t,wireframe,flatShading:!1});this.entityMaterial=e;let s=new THREE.MeshLambertMaterial({color:new THREE.Color("red"),emissive:new THREE.Color("white"),wireframe});this.entityLightMaterial=s,this.obstacleMaterial=new THREE.MeshNormalMaterial,this.createGridVisual(this.boidsController.subDivisionCount)}createGridVisual(t){this.gridVisual=new THREE.Group;const i=this.boidsController.getBoundary(),e=Math.max(i[0],i[1],i[2])/t;for(let s=0;s<t;s++)for(let o=0;o<t;o++)for(let n=0;n<t;n++){if((s+.5)*e>i[0]||(o+.5)*e>i[1]||(n+.5)*e>i[2])continue;const t=new THREE.BoxGeometry(e,e,e),h=new THREE.EdgesGeometry(t),a=new THREE.LineSegments(h);a.material.color=new THREE.Color(10066329),a.material.transparent=!1,a.position.x=e/2+s*e,a.position.y=e/2+o*e,a.position.z=e/2+n*e,this.gridVisual.add(a)}this.scene.add(this.gridVisual),this.gridVisual.visible=!1}touchStart(t){const i=t.changedTouches[0];this.mouseX=i.pageX,this.mouseY=i.pageY,this.isDragging=!0}touchEnd(t){this.isDragging=!1}touchMove(t){if(!this.isDragging)return;t.preventDefault();const i=t.changedTouches[0],e=i.pageX-this.mouseX,s=i.pageY-this.mouseY;this.mouseX=i.pageX,this.mouseY=i.pageY,this.degX+=e,this.degX>360&&(this.degX=0),this.degX<0&&(this.degX=360),this.degY+=s/3,this.degY=Math.max(.1,this.degY),this.degY=Math.min(179.9,this.degY),this.updateCamera()}onMouseDown(t){this.isDragging=!0,this.mouseX=t.offsetX,this.mouseY=t.offsetY}onMouseMove(t){if(!this.isDragging)return;const i=t.offsetX-this.mouseX,e=t.offsetY-this.mouseY;this.mouseX=t.offsetX,this.mouseY=t.offsetY,this.degX+=i,this.degX>360&&(this.degX=0),this.degX<0&&(this.degX=360),this.degY+=e/3,this.degY=Math.max(.1,this.degY),this.degY=Math.min(179.9,this.degY),this.updateCamera()}onMouseUp(t){this.isDragging=!1}onMouseWheel(t){t.preventDefault(),this.cameraRadius+=-1*t.deltaY,this.cameraRadius=Math.max(1,this.cameraRadius),this.cameraRadius=Math.min(this.cameraMax,this.cameraRadius),this.updateCamera()}updateCamera(){let t=0,i=0,e=0;const s=this.boidsController.getFlockEntities();if(this.lockOn&&s.length>0){const o=s[0].mesh;t=o.position.x,i=o.position.y,e=o.position.z}else{const s=this.boidsController.getBoundary();t=s[0]/2,i=s[1]/2-350,e=s[2]/2}const o=this.degX*Math.PI/180,n=this.degY*Math.PI/180;this.camera.position.x=t+Math.sin(o)*Math.sin(n)*this.cameraRadius,this.camera.position.z=e+Math.cos(o)*Math.sin(n)*this.cameraRadius,this.camera.position.y=i+Math.cos(n)*this.cameraRadius,this.camera.lookAt(t,i,e)}render(){const t=this.boidsController.getFlockEntities();t.forEach((t=>{const i=t.x,e=t.y,s=t.z,o=t.vx,n=t.vy,h=t.vz;let a=t.mesh,r=t.light,l=t.lightchance;t.lightstate,t.trueLightState,l||(t.lightchance=.05),null==t.lightstate&&(t.lightstate=!1),null==t.trueLightState&&(t.trueLightState=!1),a||(a=new THREE.Mesh(this.entityGeometry,this.entityMaterial),a.localVelocity={x:0,y:0,z:0},this.scene.add(a),t.mesh=a),!r&&0==t.lightstate&&fxrand()<t.lightchance?(console.log("no light!"),r=new THREE.PointLight(16777215,10),r.castShadow=!1,r.shadow.mapSize.width=256,r.shadow.mapSize.height=256,r.shadow.camera.near=.5,r.shadow.camera.far=1e3,this.scene.add(r),t.light=r,t.lightstate=!0,console.log("set true light state to true!"),t.trueLightState=!0,a.material=this.entityLightMaterial):(t.lightstate=!0,t.trueLightState=!1),a.position.x=.9*a.position.x+.1*i,a.position.y=.9*a.position.y+.1*e,a.position.z=.9*a.position.z+.1*s,a.localVelocity.x=.9*a.localVelocity.x+.1*o,a.localVelocity.y=.9*a.localVelocity.y+.1*n,a.localVelocity.z=.9*a.localVelocity.z+.1*h,a.lookAt(a.position.x+a.localVelocity.x,a.position.y+a.localVelocity.y,a.position.z+a.localVelocity.z),r&&(Math.sin(sunAngle)<Math.sin(0)&&(Math.sin(sunAngle),Math.sin(-Math.PI/9)),r.position.x=.9*a.position.x+.1*i,r.position.y=.9*a.position.y+.1*e,r.position.z=.9*a.position.z+.1*s)})),this.boidsController.getObstacleEntities().forEach((t=>{const i=t.x,e=t.y,s=t.z;let o=t.mesh;o||(o=new THREE.Mesh(this.obstacleGeometry,this.obstacleMaterial),this.scene.add(o),t.mesh=o),o.position.x=i,o.position.y=e,o.position.z=s})),this.lockOn&&t.length>0&&this.updateCamera()}}class n{constructor(t,i,e){this.boidsController=t,this.renderer=i,this.workerPlanner=e}init(){this.boidsController.subDivisionCount}statBegin(){}statEnd(){}addBoids(t=50){const e=this.boidsController.getBoundary();for(let s=0;s<t;s++){const t=Math.floor(Math.random()*e[0]),s=Math.floor(Math.random()*e[1]),o=Math.floor(Math.random()*e[2]),n=4*Math.random()-2,h=4*Math.random()-2,a=4*Math.random()-2,r=new i(i.FLOCK_ENTITY,t,s,o,n,h,a);this.boidsController.addFlockEntity(r)}this.workerPlanner&&this.workerPlanner.sendInitialData(),this.updateButtonLabels()}addObstacles(t=5){const e=this.boidsController.getBoundary();for(let s=0;s<t;s++){const t=Math.floor(Math.random()*e[0]),s=Math.floor(Math.random()*e[1]),o=Math.floor(Math.random()*e[2]),n=new i(i.OBSTACLE_ENTITY,t,s,o);this.boidsController.addObstacleEntity(n)}this.workerPlanner&&this.workerPlanner.sendInitialData(),this.updateButtonLabels()}updateButtonLabels(){}}class h{constructor(t,i,e=4){this.boidsController=t,this.updateCallback=i,this.workerCount=e,this.workers=[],this.workerCompletedCount=0;for(let t=0;t<this.workerCount;t++)this.workers.push(new Worker("./boids/boidsBundle-worker.js",{type:"module"}));this.workers.forEach(((t,i)=>{t.onmessage=this.onWorkerMessageReceived.bind(this,i)}))}init(){this.sendInitialData()}sendInitialData(){const t=this.boidsController.serialize();this.workers.forEach((i=>{i.postMessage({action:"initialData",data:t})}))}requestIterate(){if(0!=this.workerCompletedCount)return void console.log("Previous request must be completed first!");const t={aligmentWeight:this.boidsController.aligmentWeight,cohesionWeight:this.boidsController.cohesionWeight,separationWeight:this.boidsController.separationWeight,maxEntitySpeed:this.boidsController.maxEntitySpeed},i=this.boidsController.getFlockEntities().length,e=Math.round(i/this.workerCount);this.workers.forEach(((s,o)=>{const n=o*e,h=o==this.workerCount-1?i:(o+1)*e-1;s.postMessage({action:"iterate",start:n,end:h,config:t})}))}onWorkerMessageReceived(t,i){"iterateCompleted"==i.data.action&&(this.boidsController.applyBoidsData(i.data.data),this.workers.forEach(((e,s)=>{t!=s&&e.postMessage({action:"updateBoidsData",data:i.data.data})})),this.workerCompletedCount++,this.workerCompletedCount==this.workerCount&&(this.workerCompletedCount=0,this.updateCallback()))}}document.addEventListener("DOMContentLoaded",(new class{constructor(){this.flockEntityCount=200,this.obstacleEntityCount=0,this.simpleRenderer=void 0,this.boidsController=void 0,this.controlHelper=void 0,this.workerPlanner=void 0,this.iterateRequested=!1,this.lightchance=.1}init(){this.boidsController=new s(220,200,220,2),this.simpleRenderer=new o({boidsController:this.boidsController},scene),this.simpleRenderer.init(),this.workerPlanner=new h(this.boidsController,this.onWorkerUpdate.bind(this)),this.workerPlanner.init(),this.controlHelper=new n(this.boidsController,this.simpleRenderer,this.workerPlanner),this.controlHelper.init(),this.controlHelper.addBoids(this.flockEntityCount),this.controlHelper.addObstacles(this.obstacleEntityCount),window.requestAnimationFrame(this.render.bind(this))}render(){window.requestAnimationFrame(this.render.bind(this)),this.controlHelper.statBegin(),this.iterateRequested||(this.workerPlanner.requestIterate(),this.iterateRequested=!0),this.simpleRenderer.render()}onWorkerUpdate(){this.controlHelper.statEnd(),this.iterateRequested=!1}}).init())})();