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
var itens_lista = [];
var ids_itens_lista = [];
var itens_dispensa = [];
var prioridade_muito_alta = [];
var prioridade_alta = [];
var prioridade_media = [];
var prioridade_baixa = [];
var prioridade_muito_baixa = [];


global.storage = storage;
global.listas = ids_listas;
global.itens_lista = itens_lista;
global.ids_itens_lista = ids_itens_lista;
global.listas_armazenadas = listas_armazenadas;
global.itens_dispensa = itens_dispensa;
global.itens = ids_itens;
global.prioridade_muito_alta = prioridade_muito_alta;
global.prioridade_alta = prioridade_alta;
global.prioridade_media = prioridade_media;
global.prioridade_baixa = prioridade_baixa;
global.prioridade_muito_baixa = prioridade_muito_baixa;
