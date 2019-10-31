import React from 'react'
import { connect } from 'react-redux'
import Display from '../components/Display'

const VisibleDisplay = ({value}) => {
    return (
        <div>
	    <Display value={value} />
        </div>
    )
}

const mapStateToProps = state => ({
    value: state.res
})

export default connect(mapStateToProps)(VisibleDisplay)
