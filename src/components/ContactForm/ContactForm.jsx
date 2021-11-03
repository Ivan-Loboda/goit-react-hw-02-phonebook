import { Component } from 'react';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    formSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
    }



    handleInputChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <form onSubmit={this.formSubmit}>
                <label> Name
                    <input
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                    />
                </label>
                <label> Phone
                    <input
                        value={this.state.number}
                        onChange={this.handleInputChange}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                    />
                </label>
                <button type="submit">Add contact</button>
            </form>
        )
    }
}

export default ContactForm;