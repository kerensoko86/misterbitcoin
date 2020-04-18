
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { of } from 'rxjs/observable/of'
import { User } from '../models/user.model';

const USERS = [
    {
        "_id": "5a56640269f443a5d64b32ca",
        "name": "Ochoa Hyde",
        "coins": 70,
        "moves": []
    },
];

@Injectable({
    providedIn: 'root',
})
export class UserService {

    private _users: User[] = USERS;
    private _users$ = new BehaviorSubject<Array<User>>([])
    public users$ = this._users$.asObservable()
    private _onMoveAdded$ = new BehaviorSubject<void>(null);
    public onMoveAdded$ = this._onMoveAdded$.asObservable()


    public getUserById(id: string): Observable<User> {
        //mock the server work
        const user = this._users.find(user => user._id === id)

        //return an observable
        return user ? of(user) : Observable.throw(`User id ${id} not found!`)
    }

    public signup(user: User) {
        const newUser = new User(user._id, user.name);
        newUser.setId();
        this._users.push(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
    }

    public getUser() {
        const user = JSON.parse(localStorage.getItem('user'));

        return user;
    }
    public getMoves() {
        const user = JSON.parse(localStorage.getItem('user'));
        return user.moves;
    }
    public addMove(amount, contact) {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user.coins > amount) {
            user.coins -= amount;
            const move = { to: contact.name, at: Date.now(), amount: amount }
            user.moves.unshift(move)
            localStorage.setItem('user', JSON.stringify(user));
            // next
            this._onMoveAdded$.next();
        }
    }
}

let subj$ = new BehaviorSubject<any>('')
subj$.subscribe(() => {

})
