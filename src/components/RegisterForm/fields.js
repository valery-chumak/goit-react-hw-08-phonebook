const fields = {
  name: {
    label: 'Username',
    name: 'name',
    type: 'text',
    placeholder: 'Enter user name',
    required: true,
  },
  email: {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Enter user email',
    required: true,
  },
  password: {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: 'Enter user password (min 6 symbols)',
    required: true,
  },
};

export default fields;
