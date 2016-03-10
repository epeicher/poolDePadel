import dragula from 'dragula';

class dragAndDropService {
    
    constructor() {
        
    }
    
    configureContainers(left, right){
        this.drake = dragula([right], {
            removeOnSpill: false,
            accepts : (el, target, source, sibling) => {
                console.log(el);
                return false
            }
        });

    }

    onRemoveRightItem(cb){
        if(!this.drake){ 
            console.error('container not configured, use configureContainers');
            return;
        }
        this.drake.on("out", (el,container,source)=> {
            cb(el);
        });
    }
    

}

export default dragAndDropService;