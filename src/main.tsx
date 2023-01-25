import { render } from "preact";
import { App } from "./app";
import "./index.css";

console.log(
	"Seja muito bem vindo!\nPagina desenvolvida com carinho por:\n\n   🎀[̲̅D][̲̅u][̲̅s][̲̅k]🎀   \n\nVisite meu portfólio em:\nhttps://github.com/MoonDusk1996"
);

render( <App />, document.getElementById( "app" ) as HTMLElement );
