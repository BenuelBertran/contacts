const ContactList = [
  {
    'id': 1,
    'name': 'Harry Potter',
    'phoneNumber': '+79156635666',
    'image': 'https://lh3.googleusercontent.com/-f8wLv_BAz_I/VyVnrlWVlZI/AAAAAAAABg8/qk0swiqneGwRVIuF7muhMrpDWHE8O5zcw/w500-h430/fes.gif',
    'email': 'boy_who_lived@gmail.com',
    'skype': 'HarryPotter_009',
    'address': 'Privet drive, 4'
  }, {
    'id': 2,
    'name': 'Ron Weasley',
    'phoneNumber': '+79154565416',
    'image': 'https://data.whicdn.com/images/254593939/original.gif',
    'email': 'LittleWeasley@gmail.com',
    'skype': 'Chudley.Cannons',
    'address': 'Ottery St Catchpole'
  }, {
    'id': 3,
    'name': 'Hermione Granger',
    'phoneNumber': '+79156413326',
    'image': 'https://i.gifer.com/2go.gif',
    'email': 'smartass@gmail.com',
    'skype': 'Hermi',
    'address': 'Muggles home'
  }, {
    'id': 4,
    'name': 'Albus Dumbledore',
    'phoneNumber': '+79157030112',
    'image': 'https://i.gifer.com/EPWu.gif',
    'email': 'merlin_fan@gmail.com',
    'skype': 'A.P.W.D',
    'address': 'Hogwarts'
  }, {
    'id': 5,
    'name': 'Minerva McGonagall',
    'phoneNumber': '+79157030113',
    'image': 'https://media1.tenor.com/images/a3726aca4be73e80a5f4244098b2bb76/tenor.gif?itemid=5442924',
    'email': 'pussycat@gmail.com',
    'skype': 'Minerva.M.C',
    'address': 'Hogwarts'
  }, {
    'id': 6,
    'name': 'Rubeus Hagrid',
    'phoneNumber': '+791551130029',
    'image': 'https://media1.tenor.com/images/d778fdc1626e23ab21d71f04334e2a78/tenor.gif?itemid=7396375',
    'email': 'none',
    'skype': 'icq: 67923234',
    'address': 'small hut, Hogwarts'
  }, {
    'id': 7,
    'name': 'Severus Snape',
    'phoneNumber': '+79156661313',
    'image': 'https://data.whicdn.com/images/241363899/original.gif',
    'email': 'not_write_to_me@gmail.com',
    'skype': 'lilyflower',
    'address': 'Hogwarts'
  }, {
    'id': 8,
    'name': 'Draco Malfoy',
    'phoneNumber': '+79151111111',
    'image': 'https://i.gifer.com/IECB.gif',
    'email': 'great_malfoy@gmail.com',
    'skype': 'Draco_de_Malfoy',
    'address': 'Malfoy manor in Wiltshire'
  }
];

class Contact extends React.Component {
  state = ({
    isOpened: false
  });

  fullContactHandler = (evt) => {
    const currentState = this.state.isOpened;
    
    evt.preventDefault();
    this.setState ({
      isOpened: !currentState
    });
  }
  
  render () {
    const {image, name, phoneNumber, email, skype, address} = this.props;
    const {isOpened} = this.state;
    
    return (
      <li className="contact contacts__item">
        <div className="contact__basic">
          <img className="contact__image" src={image} width="60px" height="60px"/>
          <div className="contact__info">
            <p className="contact__name"> {name} </p>
            <p className="contact__number"> {phoneNumber} </p>
            <button className="contact__btn" onClick={this.fullContactHandler}>
              {this.state.isOpened 
                ? "hide"
                : "show"
              }</button>
          </div>
        </div>
        {
          this.state.isOpened 
          ? <div className="contact__full">
              <h4 className="contact__title">Дополнительно:</h4>
              <p className="contact__address">Адрес: {address}</p>
              <p className="contact__skype">Skype: {skype}
              </p>
              <p className="contact__email">Email:
                <a className="contact__link" href="#"> {email}</a>  
              </p>
            </div> 
          : null
        }
      </li>
    );
  } 
};

class Contacts extends React.Component {
  state = ({
    displayedContacts: ContactList
  });

  handleSearch = (evt) => {
    const searchQuery = evt.target.value.toLowerCase();
    const searchResult = ContactList.filter(function(el) {
        let searchName = el.name.toLowerCase();
        let searchNumber = el.phoneNumber;
      
        return (
          searchName.indexOf(searchQuery) !== -1 ||
          searchNumber.indexOf(searchQuery) !== -1
        );
    });

    this.setState({
        displayedContacts: searchResult
    });
  };

  render () {
    return (
      <div className="contacts__wrapper">
        <input autoFocus type="text" className="contacts__search" onChange={this.handleSearch} placeholder="Введите имя или номер телефона"/>
        <ul className="contacts__list">
          {
            this.state.displayedContacts.map(function(el) {
              return ( 
                <Contact
                  key={el.id}
                  name={el.name}
                  phoneNumber={el.phoneNumber}
                  image={el.image}
                  email={el.email}
                  skype={el.skype}
                  address={el.address}
                />
              );
            })
          }
        </ul>
      </div>
    );
  };
};

ReactDOM.render (
  <Contacts/>,
  document.querySelector(".contacts")
);
