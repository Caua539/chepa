import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

var storage = new Storage({
	// maximum capacity, default 1000 
	size: 100,

	// Use AsyncStorage for RN, or window.localStorage for web.
	// If not set, data would be lost after reload.
	storageBackend: AsyncStorage,
	
	// expire time, default 1 day(1000 * 3600 * 24 milliseconds).
	// can be null, which means never expire.
	defaultExpires: 1000 * 3600 * 24,
	
	// cache data in the memory. default is true.
	enableCache: true,
	
	// if data was not found in storage or expired,
	// the corresponding sync method will be invoked and return 
	// the latest data.
})

var ids_listas= [];
var ids_itens = [];
var listas_armazenadas = [];
var itens_dispensa = [];


global.storage = storage;
global.listas = ids_listas;
global.listas_armazenadas = listas_armazenadas;
global.itens_dispensa = itens_dispensa;
global.itens = ids_itens;