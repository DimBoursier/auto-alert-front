import React, { Component } from 'react';
import axios from 'axios';

class CarDetail extends Component {
    state = {
        carLoaded: null,
    }

    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.carLoaded || (this.state.carLoaded && this.state.carLoaded.id !== this.props.id)) {
                axios.get('/voitures/' + this.props.id)
                    .then(res => {
                        console.log(res.data);

                        this.setState({ carLoaded: res.data });
                    })
            }
        }
    }

    render() {
        let car = <p>Please select a car</p>

        if (this.state.carLoaded) {
            car = (
                <div>
                    <div>Marque: <strong>{this.state.carLoaded.marque}</strong></div>
                    <div>Model: <strong>{this.state.carLoaded.model}</strong></div>
                    <div>Annee: <strong>{this.state.carLoaded.annee_modele}</strong></div>
                    <div>Kilometre: <strong>{this.state.carLoaded.kilometrage}</strong></div>
                    <div>Puissance: <strong>{this.state.carLoaded.puissance}</strong></div>
                    <div>Boite de vitesse: <strong>{this.state.carLoaded.boite_vitesse}</strong></div>
                    <div>Carburant: <strong>{this.state.carLoaded.carburant}</strong></div>
                    <div>Categorie: <strong>{this.state.carLoaded.categorie}</strong></div>
                    <div>Description: <strong>{this.state.carLoaded.description}</strong></div>
                    <div>Email: <strong>{this.state.carLoaded.email}</strong></div>
                    <div>Localisation: <strong>{this.state.carLoaded.localisation}</strong></div>
                    <div>Tel: <strong>{this.state.carLoaded.tel}</strong></div>
                    <img src={this.state.carLoaded.photo} alt={this.state.carLoaded.marque} />
                </div>)
        }
        return car;

    }
}

export default CarDetail;