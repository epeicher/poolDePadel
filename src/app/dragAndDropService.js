import dragula from 'dragula';

class dragAndDropService {
    
    constructor() {
        
    }
    
    configureContainers(left, right){
        let drake = dragula([right], {
            removeOnSpill: true
        });

        drake.on("remove", (el,container,source)=> {
            console.log(el);
        });
    }
    

}

export default dragAndDropService;