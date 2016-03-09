import dragula from 'dragula';

class dragAndDropService {
    
    constructor() {
        
    }
    
    configureContainers(left, right){
        dragula([left, right]
        ,{
            moves : (el, target, source, sibling) => {
                if(target.id === "containerLeft") 
                    return false;
                return true;
            }
        }
        );
    }
    

}

export default dragAndDropService;