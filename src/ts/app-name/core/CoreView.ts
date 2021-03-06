import {UIComponent} from "@webfruits/core";

/******************************************************************
 * CoreView extends UIComponent
 *
 * @author matthias.schulz@jash.de
 *****************************************************************/

export class CoreView extends UIComponent{

    /******************************************************************
     * Properties
     *****************************************************************/


    /******************************************************************
     * Constructor
     *****************************************************************/

    constructor() {
        super("app-name");
        this.view.innerHTML = "webfruits/webpack-starterkit build successful";
    }

    /******************************************************************
     * Public Methodes
     *****************************************************************/


    /******************************************************************
     * Private Methodes
     *****************************************************************/


    /******************************************************************
     * Events
     *****************************************************************/

}
