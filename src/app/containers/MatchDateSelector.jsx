import React from 'react'
import {connect} from 'react-redux'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import { getNextMatch, getMatchesDates } from '../actions'
import IconMenu from 'material-ui/lib/menus/icon-menu'
import MenuItem from 'material-ui/lib/menus/menu-item'
import ContentFilter from 'material-ui/lib/svg-icons/content/filter-list'
import {Link} from 'react-router'

class MatchDateSelector extends React.Component {
    
    static propTypes = {
		dispatch: React.PropTypes.func.isRequired
	}

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
  componentWillMount() {
      this.props.dispatch(getMatchesDates());
  }    
  
  handleClick(e) {
      this.props.dispatch({type: 'NEXT_MATCH', nextMatch: e.target.innerHTML});
  }
    
    render() {
        const {matchDate} = this.props;
        return (          
            <AppBar 
                title={"Próximo partido: " + matchDate} 
                iconElementLeft={
                    <IconMenu iconButtonElement= {
                        <IconButton><ContentFilter /></IconButton>
                        }
                        onItemTouchTap={this.handleClick}
                    >
                    {
                        this.props.matchesDates.map((dt,idx) => {
                            return (
                                <MenuItem key={idx} value={dt} primaryText={dt} />    
                            )
                        }) 
                    }                       
                    </IconMenu>
                } 
            >

            </AppBar>
        )
    }
}

const mapStateToProps = (state) => {
  return {
      matchDate: state.matches.matchDate,
      matchesDates: state.matches.matches
  }
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

export default connect(
  mapStateToProps
)(MatchDateSelector)

