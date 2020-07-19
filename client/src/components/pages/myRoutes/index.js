import React, {Component} from 'react'
import RouteService from './../../../service/RoutesService'
import Spinner from 'react-bootstrap/Spinner'

class MyRoutes extends Component {
    constructor (props) {
        super (props)
        this.state = {
            userId: props.loggedInUser._id,
            routes: undefined
        }
        this.routeService = new RouteService()
    }

    componentDidMount = () => this.updateRouteList()

    updateRouteList = () => {
        this.routeService
            .getMyRoutes(this.state.userId)
            .then(response => this.setState({routes :response.data}))
            .catch(err => console.log(err))
    }
    
    render () {
        return (
            <>
            <h2>HOLA!</h2>
                {!this.state.routes ? <Spinner animation="grow" role="status"><span className="sr-only">Loading...</span></Spinner> : <h3>{this.state.routes.map(route => route.name)}</h3>} 
            </>
        )
    }
}
//CREAR TARJETAS PARA CADA RUTA

export default MyRoutes