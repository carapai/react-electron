import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'

class Hello extends Component {
    render() {
        const {tpStore} = this.props;
        return (
            <div>
                <button onClick={tpStore.tick}>Send</button>
            </div>
        )
    }
}

export default inject('tpStore')(observer(Hello))