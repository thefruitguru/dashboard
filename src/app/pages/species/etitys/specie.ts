export class Specie {
    private _nomeCientifico: string;
    private _nomePopular: string;
    private _familia: string;
    private _formaDeVida: string;
    private _usos: object;
    private _cores: object;
    private _textura: string;
    private _sabores: object;
    private _caracteristicas: string;
    private _biomaGeral: object;
    private _subBioma: object;
    private _reproducao: string;
    private _formato: string;

    getNomeCientifico(): string {
        return this._nomeCientifico;
    }

    setNomeCientifico(nomeCientifico: string) {
        this._nomeCientifico = nomeCientifico.toLowerCase().trim();
    }

    getNomePopular(): string {
        return this._nomePopular;
    }

    setNomePopular(nomePopular: string) {
        this._nomePopular = nomePopular.toLowerCase().trim();
    }

    getFamilia(): string {
        return this._familia;
    }

    setFamilia(familia: string) {
        this._familia = familia.toLowerCase().trim();
    }

    getFormaDeVida(): string {
        return this._formaDeVida;
    }

    setFormaDeVida(formaDeVida: string) {
        this._formaDeVida = formaDeVida.toLowerCase().trim();
    }

    getUsos(): object {
        return this._usos;
    }

    setUsos(usos: string) {
        let listVector = usos.split(',');
        let objectVector = {};

        for (let i = 0; i < listVector.length; i++) {
            let newProperty = listVector[i].toLowerCase().trim();
            objectVector[newProperty] = true;
        }

        this._usos = objectVector;
    }

    getCores(): object {
        return this._cores;
    }

    setCores(cores: string) {
        let listVector = cores.split(',');
        let objectVector = {};

        for (let i = 0; i < listVector.length; i++) {
            let newProperty = listVector[i].toLowerCase().trim();
            objectVector[newProperty] = true;
        }

        this._cores = objectVector;
    }

    getTextura(): string {
        return this._textura;
    }

    setTextura(textura: string) {
        this._textura = textura.toLowerCase().trim();
    }

    getSabores(): object {
        return this._sabores;
    }

    setSabores(sabores: string) {
        let listVector = sabores.split(',');
        let objectVector = {};

        for (let i = 0; i < listVector.length; i++) {
            let newProperty = listVector[i].toLowerCase().trim();
            objectVector[newProperty] = true;
        }

        this._sabores = objectVector;
    }

    getCaracteristicas(): string {
        return this._caracteristicas;
    }

    setCaracteristicas(caracteristicas: string) {
        this._caracteristicas = caracteristicas.toLowerCase().trim();
    }

    getBiomaGeral(): object {
        return this._biomaGeral;
    }

    setBiomaGeral(biomaGeral: string) {
        let listVector = biomaGeral.split(',');
        let objectVector = {};

        for (let i = 0; i < listVector.length; i++) {
            let newProperty = listVector[i].toLowerCase().trim();
            objectVector[newProperty] = true;
        }

        this._biomaGeral = objectVector;
    }

    getSubBioma(): object {
        return this._subBioma;
    }

    setSubBioma(subBioma: string) {
        let listVector = subBioma.split(',');
        let objectVector = {};

        for (let i = 0; i < listVector.length; i++) {
            let newProperty = listVector[i].toLowerCase().trim();
            objectVector[newProperty] = true;
        }

        this._subBioma = objectVector;
    }

    getReproducao(): string {
        return this._reproducao;
    }

    setReproducao(reproducao: string) {
        this._reproducao = reproducao.toLowerCase().trim();
    }

    getFormato(): string {
        return this._formato;
    }

    setFormato(formato: string) {
        this._formato = formato;
    }
 }