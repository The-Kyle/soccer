import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

export default class Edit extends Component {
    showTeamStats() {
        this.props.showTeamStats();
    }

    editPlayer(event) {
        event.preventDefault();

        let player = {
            _id: this.props.currentPlayer._id,
            name: this.refs.name.value,
            team: this.refs.team.value,
            ballManipulation: this.refs.ballManipulation.value,
            kickingAbilities: this.refs.kickingAbilities.value,
            passingAbilities: this.refs.passingAbilities.value,
            duelTackling: this.refs.duelTackling.value,
            fieldCoverage: this.refs.fieldCoverage.value,
            blockingAbilities: this.refs.blockingAbilities.value,
            gameStrategy: this.refs.gameStrategy.value,
            playmakingRisks: this.refs.playmakingRisks.value,
            notes: this.refs.notes.value,
            createdAt: new Date(),
            owner: Meteor.userId(),
        };

        // console.log("Success player submitted!");
        // this.props.history.push('/'); // pushing to main page

        Meteor.call('updatePlayer', player, (error) => {
            if(error) {
                alert("Update failed: " + error.reason);
            } else {
                alert("Player updated");
                // this.props.history.push('/');
                this.showTeamStats();
            }
        })
    }

    render() {
        const currentPlayer = this.props.currentPlayer;

        return (
            <div className="row">
                <form className="col s12" onSubmit={this.editPlayer.bind(this)}>
                    <h3>Add a new player</h3>
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Name" ref="name" type="text" className="validate" defaultValue={currentPlayer.name} />
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="Team" ref="team" type="text" className="validate" defaultValue={currentPlayer.team} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s6">
                            <h5>Ball Manipulation</h5>
                            <select className="browser-default" ref="ballManipulation" defaultValue={currentPlayer.ballManipulation} >
                                <option value="0">0 - Hasn't demonstrated skills</option>
                                <option value="1">1 - Needs improvement</option>
                                <option value="2">2 - Skill acquired</option>
                                <option value="3">3 - Great skills</option>
                            </select>
                        </div>
                        <div className="col s6">
                            <h5>Kicking Abilities</h5>
                            <select className="browser-default" ref="kickingAbilities" defaultValue={currentPlayer.kickingAbilities} >
                                <option value="0">0 - Hasn't demonstrated skills</option>
                                <option value="1">1 - Needs improvement</option>
                                <option value="2">2 - Skill acquired</option>
                                <option value="3">3 - Great skills</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s6">
                            <h5>Passing Abilities</h5>
                            <select className="browser-default" ref="passingAbilities"  defaultValue={currentPlayer.passingAbilities} >
                                <option value="0">0 - Hasn't demonstrated skills</option>
                                <option value="1">1 - Needs improvement</option>
                                <option value="2">2 - Skill acquired</option>
                                <option value="3">3 - Great skills</option>
                            </select>
                        </div>
                        <div className="col s6">
                            <h5>Duel Tackling</h5>
                            <select className="browser-default" ref="duelTackling" defaultValue={currentPlayer.duelTackling} >
                                <option value="0">0 - Hasn't demonstrated skills</option>
                                <option value="1">1 - Needs improvement</option>
                                <option value="2">2 - Skill acquired</option>
                                <option value="3">3 - Great skills</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s6">
                            <h5>Field Coverage</h5>
                            <select className="browser-default" ref="fieldCoverage" defaultValue={currentPlayer.fieldCoverage} >
                                <option value="0">0 - Hasn't demonstrated skills</option>
                                <option value="1">1 - Needs improvement</option>
                                <option value="2">2 - Skill acquired</option>
                                <option value="3">3 - Great skills</option>
                            </select>
                        </div>
                        <div className="col s6">
                            <h5>Blocking Abilities</h5>
                            <select className="browser-default" ref="blockingAbilities" defaultValue={currentPlayer.blockingAbilities} >
                                <option value="0">0 - Hasn't demonstrated skills</option>
                                <option value="1">1 - Needs improvement</option>
                                <option value="2">2 - Skill acquired</option>
                                <option value="3">3 - Great skills</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s6">
                            <h5>Game Stragtegy</h5>
                            <select className="browser-default" ref="gameStrategy" defaultValue={currentPlayer.gameStrategy} >
                                <option value="0">0 - Hasn't demonstrated skills</option>
                                <option value="1">1 - Needs improvement</option>
                                <option value="2">2 - Skill acquired</option>
                                <option value="3">3 - Great skills</option>
                            </select>
                        </div>
                        <div className="col s6">
                            <h5>PlaymakingRisks</h5>
                            <select className="browser-default" ref="playmakingRisks" defaultValue={currentPlayer.playmakingRisks} >
                                <option value="0">0 - Hasn't demonstrated skills</option>
                                <option value="1">1 - Needs improvement</option>
                                <option value="2">2 - Skill acquired</option>
                                <option value="3">3 - Great skills</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s6">
                            <input placeholder="Notes" ref="notes" type="text" className="materialize-textarea"  defaultValue={currentPlayer.notes} />
                        </div>
                        <div className="col s6">
                            <button className="btn waves-effecct waves-light" type="submit" name="action">submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>


                </form>
            </div>
        )
    }
}

