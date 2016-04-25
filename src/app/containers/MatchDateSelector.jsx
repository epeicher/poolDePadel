import React from 'react'
import {connect} from 'react-redux'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import { getNextMatch } from '../actions'

class MatchDateSelector extends React.Component {
    
    static propTypes = {
		dispatch: React.PropTypes.func.isRequired
	}

    constructor(props){
        super(props);
    }
    
  componentWillMount() {
      this.props.dispatch(getNextMatch());
  }    
    
    render() {
        const {matchDate} = this.props;
        return (          
            <AppBar 
                title={"Próximo partido: " + matchDate} 
                iconElementLeft={<IconButton />} 
            />
        )
    }
}

const mapStateToProps = (state) => {
  return {
      matchDate: state.nextMatch.matchDate
  }
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

export default connect(
  mapStateToProps
)(MatchDateSelector)

