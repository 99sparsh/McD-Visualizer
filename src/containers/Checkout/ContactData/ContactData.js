import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import styles from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
    state = {
        name: "",
        email: "",
        address: {
            street: "",
            postalCode: "",
        },
        loading: false,
    };
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });

        const order = {
            ingredients: this.state.ingredients,
            price: this.props.price,
            customer: {
                name: "Test User 1",
                address: "Test Street 1",
                pincode: "543678",
                email: "test@gmail.com",
            },
            deliveryMethod: "fastest",
        };

        axios
            .post("/orders.json", order)
            .then((response) => {
                this.setState({ loading: false });
                this.props.history.push("/");
            })
            .catch((error) => this.setState({ loading: false }));
    };
    render() {
        let form = (
            <form>
                <Input
                    inputtype="input"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                />
                <Input
                    inputtype="input"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                />
                <Input
                    inputtype="input"
                    type="text"
                    name="street"
                    placeholder="Street"
                />
                <Input
                    inputtype="input"
                    type="text"
                    name="postal"
                    placeholder="Postal Code"
                />
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={styles.ContactData}>
                <h4>Enter your contact details</h4>
                {form}
                <Button btnType="Success" clicked={this.orderHandler}>
                    ORDER
                </Button>
            </div>
        );
    }
}

export default ContactData;
