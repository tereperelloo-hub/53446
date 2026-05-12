// Generated from c:/Users/terep/ssl-antlr-calculator/tablero.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import tableroListener from './tableroListener.js';
import tableroVisitor from './tableroVisitor.js';

const serializedATN = [4,1,41,108,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
1,0,1,0,1,0,1,0,5,0,31,8,0,10,0,12,0,34,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,
3,1,43,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,
6,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,
10,1,10,1,10,5,10,99,8,10,10,10,12,10,102,9,10,1,11,1,11,1,12,1,12,1,12,
0,0,13,0,2,4,6,8,10,12,14,16,18,20,22,24,0,5,1,0,8,10,1,0,15,19,1,0,22,25,
2,0,37,37,39,40,1,0,31,36,100,0,26,1,0,0,0,2,42,1,0,0,0,4,44,1,0,0,0,6,52,
1,0,0,0,8,54,1,0,0,0,10,63,1,0,0,0,12,65,1,0,0,0,14,78,1,0,0,0,16,80,1,0,
0,0,18,86,1,0,0,0,20,95,1,0,0,0,22,103,1,0,0,0,24,105,1,0,0,0,26,27,5,1,
0,0,27,28,5,38,0,0,28,32,5,2,0,0,29,31,3,2,1,0,30,29,1,0,0,0,31,34,1,0,0,
0,32,30,1,0,0,0,32,33,1,0,0,0,33,35,1,0,0,0,34,32,1,0,0,0,35,36,5,3,0,0,
36,1,1,0,0,0,37,43,3,4,2,0,38,43,3,8,4,0,39,43,3,12,6,0,40,43,3,16,8,0,41,
43,3,18,9,0,42,37,1,0,0,0,42,38,1,0,0,0,42,39,1,0,0,0,42,40,1,0,0,0,42,41,
1,0,0,0,43,3,1,0,0,0,44,45,5,4,0,0,45,46,5,38,0,0,46,47,5,5,0,0,47,48,3,
6,3,0,48,49,5,6,0,0,49,50,5,39,0,0,50,51,5,7,0,0,51,5,1,0,0,0,52,53,7,0,
0,0,53,7,1,0,0,0,54,55,5,11,0,0,55,56,5,38,0,0,56,57,5,12,0,0,57,58,3,10,
5,0,58,59,5,13,0,0,59,60,3,20,10,0,60,61,5,14,0,0,61,62,5,7,0,0,62,9,1,0,
0,0,63,64,7,1,0,0,64,11,1,0,0,0,65,66,5,20,0,0,66,67,5,38,0,0,67,68,5,2,
0,0,68,69,5,5,0,0,69,70,5,12,0,0,70,71,3,14,7,0,71,72,5,7,0,0,72,73,5,21,
0,0,73,74,5,12,0,0,74,75,5,38,0,0,75,76,5,7,0,0,76,77,5,3,0,0,77,13,1,0,
0,0,78,79,7,2,0,0,79,15,1,0,0,0,80,81,5,26,0,0,81,82,3,20,10,0,82,83,3,24,
12,0,83,84,3,22,11,0,84,85,5,7,0,0,85,17,1,0,0,0,86,87,5,27,0,0,87,88,5,
28,0,0,88,89,5,38,0,0,89,90,3,24,12,0,90,91,3,22,11,0,91,92,5,29,0,0,92,
93,5,39,0,0,93,94,5,7,0,0,94,19,1,0,0,0,95,100,5,38,0,0,96,97,5,30,0,0,97,
99,5,38,0,0,98,96,1,0,0,0,99,102,1,0,0,0,100,98,1,0,0,0,100,101,1,0,0,0,
101,21,1,0,0,0,102,100,1,0,0,0,103,104,7,3,0,0,104,23,1,0,0,0,105,106,7,
4,0,0,106,25,1,0,0,0,3,32,42,100];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class tableroParser extends antlr4.Parser {

    static grammarFileName = "tablero.g4";
    static literalNames = [ null, "'tablero'", "'{'", "'}'", "'fuente'", 
                            "'tipo'", "'ruta'", "';'", "'csv'", "'api'", 
                            "'json'", "'metrica'", "'='", "'('", "')'", 
                            "'suma'", "'promedio'", "'maximo'", "'minimo'", 
                            "'contar'", "'grafico'", "'usar'", "'barras'", 
                            "'lineas'", "'torta'", "'tabla'", "'filtro'", 
                            "'alerta'", "'si'", "'entonces'", "'.'", "'=='", 
                            "'!='", "'>'", "'<'", "'>='", "'<='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "BOOLEANO", "IDENTIFICADOR", 
                             "CADENA", "NUMERO", "WS" ];
    static ruleNames = [ "programa", "elemento", "fuente", "tipo_fuente", 
                         "metrica", "agregacion", "grafico", "tipo_grafico", 
                         "filtro", "alerta", "campo", "valor", "operador" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = tableroParser.ruleNames;
        this.literalNames = tableroParser.literalNames;
        this.symbolicNames = tableroParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, tableroParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(tableroParser.T__0);
	        this.state = 27;
	        this.match(tableroParser.IDENTIFICADOR);
	        this.state = 28;
	        this.match(tableroParser.T__1);
	        this.state = 32;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 202377232) !== 0)) {
	            this.state = 29;
	            this.elemento();
	            this.state = 34;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 35;
	        this.match(tableroParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elemento() {
	    let localctx = new ElementoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, tableroParser.RULE_elemento);
	    try {
	        this.state = 42;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 37;
	            this.fuente();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 38;
	            this.metrica();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 39;
	            this.grafico();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 40;
	            this.filtro();
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 41;
	            this.alerta();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fuente() {
	    let localctx = new FuenteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, tableroParser.RULE_fuente);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(tableroParser.T__3);
	        this.state = 45;
	        this.match(tableroParser.IDENTIFICADOR);
	        this.state = 46;
	        this.match(tableroParser.T__4);
	        this.state = 47;
	        this.tipo_fuente();
	        this.state = 48;
	        this.match(tableroParser.T__5);
	        this.state = 49;
	        this.match(tableroParser.CADENA);
	        this.state = 50;
	        this.match(tableroParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tipo_fuente() {
	    let localctx = new Tipo_fuenteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, tableroParser.RULE_tipo_fuente);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1792) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	metrica() {
	    let localctx = new MetricaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, tableroParser.RULE_metrica);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(tableroParser.T__10);
	        this.state = 55;
	        this.match(tableroParser.IDENTIFICADOR);
	        this.state = 56;
	        this.match(tableroParser.T__11);
	        this.state = 57;
	        this.agregacion();
	        this.state = 58;
	        this.match(tableroParser.T__12);
	        this.state = 59;
	        this.campo();
	        this.state = 60;
	        this.match(tableroParser.T__13);
	        this.state = 61;
	        this.match(tableroParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	agregacion() {
	    let localctx = new AgregacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, tableroParser.RULE_agregacion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1015808) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	grafico() {
	    let localctx = new GraficoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, tableroParser.RULE_grafico);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(tableroParser.T__19);
	        this.state = 66;
	        this.match(tableroParser.IDENTIFICADOR);
	        this.state = 67;
	        this.match(tableroParser.T__1);
	        this.state = 68;
	        this.match(tableroParser.T__4);
	        this.state = 69;
	        this.match(tableroParser.T__11);
	        this.state = 70;
	        this.tipo_grafico();
	        this.state = 71;
	        this.match(tableroParser.T__6);
	        this.state = 72;
	        this.match(tableroParser.T__20);
	        this.state = 73;
	        this.match(tableroParser.T__11);
	        this.state = 74;
	        this.match(tableroParser.IDENTIFICADOR);
	        this.state = 75;
	        this.match(tableroParser.T__6);
	        this.state = 76;
	        this.match(tableroParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tipo_grafico() {
	    let localctx = new Tipo_graficoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, tableroParser.RULE_tipo_grafico);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 62914560) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	filtro() {
	    let localctx = new FiltroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, tableroParser.RULE_filtro);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(tableroParser.T__25);
	        this.state = 81;
	        this.campo();
	        this.state = 82;
	        this.operador();
	        this.state = 83;
	        this.valor();
	        this.state = 84;
	        this.match(tableroParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	alerta() {
	    let localctx = new AlertaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, tableroParser.RULE_alerta);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(tableroParser.T__26);
	        this.state = 87;
	        this.match(tableroParser.T__27);
	        this.state = 88;
	        this.match(tableroParser.IDENTIFICADOR);
	        this.state = 89;
	        this.operador();
	        this.state = 90;
	        this.valor();
	        this.state = 91;
	        this.match(tableroParser.T__28);
	        this.state = 92;
	        this.match(tableroParser.CADENA);
	        this.state = 93;
	        this.match(tableroParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	campo() {
	    let localctx = new CampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, tableroParser.RULE_campo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.match(tableroParser.IDENTIFICADOR);
	        this.state = 100;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===30) {
	            this.state = 96;
	            this.match(tableroParser.T__29);
	            this.state = 97;
	            this.match(tableroParser.IDENTIFICADOR);
	            this.state = 102;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, tableroParser.RULE_valor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        _la = this._input.LA(1);
	        if(!(((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 13) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operador() {
	    let localctx = new OperadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, tableroParser.RULE_operador);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        _la = this._input.LA(1);
	        if(!(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 63) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

tableroParser.EOF = antlr4.Token.EOF;
tableroParser.T__0 = 1;
tableroParser.T__1 = 2;
tableroParser.T__2 = 3;
tableroParser.T__3 = 4;
tableroParser.T__4 = 5;
tableroParser.T__5 = 6;
tableroParser.T__6 = 7;
tableroParser.T__7 = 8;
tableroParser.T__8 = 9;
tableroParser.T__9 = 10;
tableroParser.T__10 = 11;
tableroParser.T__11 = 12;
tableroParser.T__12 = 13;
tableroParser.T__13 = 14;
tableroParser.T__14 = 15;
tableroParser.T__15 = 16;
tableroParser.T__16 = 17;
tableroParser.T__17 = 18;
tableroParser.T__18 = 19;
tableroParser.T__19 = 20;
tableroParser.T__20 = 21;
tableroParser.T__21 = 22;
tableroParser.T__22 = 23;
tableroParser.T__23 = 24;
tableroParser.T__24 = 25;
tableroParser.T__25 = 26;
tableroParser.T__26 = 27;
tableroParser.T__27 = 28;
tableroParser.T__28 = 29;
tableroParser.T__29 = 30;
tableroParser.T__30 = 31;
tableroParser.T__31 = 32;
tableroParser.T__32 = 33;
tableroParser.T__33 = 34;
tableroParser.T__34 = 35;
tableroParser.T__35 = 36;
tableroParser.BOOLEANO = 37;
tableroParser.IDENTIFICADOR = 38;
tableroParser.CADENA = 39;
tableroParser.NUMERO = 40;
tableroParser.WS = 41;

tableroParser.RULE_programa = 0;
tableroParser.RULE_elemento = 1;
tableroParser.RULE_fuente = 2;
tableroParser.RULE_tipo_fuente = 3;
tableroParser.RULE_metrica = 4;
tableroParser.RULE_agregacion = 5;
tableroParser.RULE_grafico = 6;
tableroParser.RULE_tipo_grafico = 7;
tableroParser.RULE_filtro = 8;
tableroParser.RULE_alerta = 9;
tableroParser.RULE_campo = 10;
tableroParser.RULE_valor = 11;
tableroParser.RULE_operador = 12;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_programa;
    }

	IDENTIFICADOR() {
	    return this.getToken(tableroParser.IDENTIFICADOR, 0);
	};

	elemento = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElementoContext);
	    } else {
	        return this.getTypedRuleContext(ElementoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElementoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_elemento;
    }

	fuente() {
	    return this.getTypedRuleContext(FuenteContext,0);
	};

	metrica() {
	    return this.getTypedRuleContext(MetricaContext,0);
	};

	grafico() {
	    return this.getTypedRuleContext(GraficoContext,0);
	};

	filtro() {
	    return this.getTypedRuleContext(FiltroContext,0);
	};

	alerta() {
	    return this.getTypedRuleContext(AlertaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterElemento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitElemento(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitElemento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuenteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_fuente;
    }

	IDENTIFICADOR() {
	    return this.getToken(tableroParser.IDENTIFICADOR, 0);
	};

	tipo_fuente() {
	    return this.getTypedRuleContext(Tipo_fuenteContext,0);
	};

	CADENA() {
	    return this.getToken(tableroParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterFuente(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitFuente(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitFuente(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Tipo_fuenteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_tipo_fuente;
    }


	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterTipo_fuente(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitTipo_fuente(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitTipo_fuente(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MetricaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_metrica;
    }

	IDENTIFICADOR() {
	    return this.getToken(tableroParser.IDENTIFICADOR, 0);
	};

	agregacion() {
	    return this.getTypedRuleContext(AgregacionContext,0);
	};

	campo() {
	    return this.getTypedRuleContext(CampoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterMetrica(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitMetrica(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitMetrica(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AgregacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_agregacion;
    }


	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterAgregacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitAgregacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitAgregacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class GraficoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_grafico;
    }

	IDENTIFICADOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tableroParser.IDENTIFICADOR);
	    } else {
	        return this.getToken(tableroParser.IDENTIFICADOR, i);
	    }
	};


	tipo_grafico() {
	    return this.getTypedRuleContext(Tipo_graficoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterGrafico(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitGrafico(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitGrafico(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Tipo_graficoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_tipo_grafico;
    }


	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterTipo_grafico(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitTipo_grafico(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitTipo_grafico(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FiltroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_filtro;
    }

	campo() {
	    return this.getTypedRuleContext(CampoContext,0);
	};

	operador() {
	    return this.getTypedRuleContext(OperadorContext,0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterFiltro(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitFiltro(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitFiltro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AlertaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_alerta;
    }

	IDENTIFICADOR() {
	    return this.getToken(tableroParser.IDENTIFICADOR, 0);
	};

	operador() {
	    return this.getTypedRuleContext(OperadorContext,0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	CADENA() {
	    return this.getToken(tableroParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterAlerta(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitAlerta(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitAlerta(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_campo;
    }

	IDENTIFICADOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tableroParser.IDENTIFICADOR);
	    } else {
	        return this.getToken(tableroParser.IDENTIFICADOR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_valor;
    }

	CADENA() {
	    return this.getToken(tableroParser.CADENA, 0);
	};

	NUMERO() {
	    return this.getToken(tableroParser.NUMERO, 0);
	};

	BOOLEANO() {
	    return this.getToken(tableroParser.BOOLEANO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OperadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tableroParser.RULE_operador;
    }


	enterRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.enterOperador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tableroListener ) {
	        listener.exitOperador(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tableroVisitor ) {
	        return visitor.visitOperador(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




tableroParser.ProgramaContext = ProgramaContext; 
tableroParser.ElementoContext = ElementoContext; 
tableroParser.FuenteContext = FuenteContext; 
tableroParser.Tipo_fuenteContext = Tipo_fuenteContext; 
tableroParser.MetricaContext = MetricaContext; 
tableroParser.AgregacionContext = AgregacionContext; 
tableroParser.GraficoContext = GraficoContext; 
tableroParser.Tipo_graficoContext = Tipo_graficoContext; 
tableroParser.FiltroContext = FiltroContext; 
tableroParser.AlertaContext = AlertaContext; 
tableroParser.CampoContext = CampoContext; 
tableroParser.ValorContext = ValorContext; 
tableroParser.OperadorContext = OperadorContext; 
