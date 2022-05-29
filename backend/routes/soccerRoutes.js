import {addNewPlayer, deletePlayer, getPlayers, getPlayerWithID, updatePlayer}  from '../controller/playerController';

const routes = (app) => {
    app.route('/players')
        .get(getPlayers)
        .post(addNewPlayer);
    
    app.route('/player/:PlayerId')
        .get(getPlayerWithID)
        .put(updatePlayer)
        .delete(deletePlayer);
}

export default routes;