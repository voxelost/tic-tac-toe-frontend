let _storage = {};

const GlobalStore = {
  set: (key, value) => {
    // console.log(`setting global var ${key}=${value}`);
    _storage[key] = value;
  },

  get: (key, _default = null) => {
    // console.log(`getting global var ${key}=${_storage[key] || _default}`);
    return _storage[key] || _default;
  },
};

export default GlobalStore;
