import tableroVisitor from "../generated/tableroVisitor.js";

export default class CustomTableroVisitor extends tableroVisitor {

    constructor() {
        super();
        this.fuentes = [];
    }

    visitPrograma(ctx) {
        console.log("\n=== Interpretando programa ===");
        return this.visitChildren(ctx);
    }

    visitFuente(ctx) {
        const nombre = ctx.IDENTIFICADOR().getText();
        const ruta = ctx.CADENA().getText();

        const fuente = {
            nombre: nombre,
            ruta: ruta
        };

        this.fuentes.push(fuente);

        console.log("Fuente registrada:", fuente);

        return null;
    }
}