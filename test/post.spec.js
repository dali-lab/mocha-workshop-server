import { describe, it, before, after } from 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import User from '../src/models/user';
import app from '../src/server';

// variables to help with testing
let token = '';
let userID = '';

describe('Posts', () => {
    before((done) => {
        request(app)
            .post('/auth/signup')
            .send({
                email: 'test@example.com',
                password: 'password',
                username: 'test',
            })
            .end((err, res) => {
                expect(res.body.token).to.exist;
                expect(res.body.user).to.exist;
                token = res.body.token;
                userID = res.body.user.id;
                done();
            });
    });

    after((done) => {
        User.findByIdAndDelete(userID).then(() => {
            done();
        });
    });

    describe('#getAll', () => {
        it('grab all posts - zero posts', (done) => {
            request(app)
                .get('/posts/getPosts')
                .set({ Authorization: `Bearer ${token}` })
                .end((err, res) => {
                    if (err) { done(err); }
                    expect(res.status).equal(200);
                    expect(res.body.length).equal(0);
                    done();
                });
        });

        it('grab all posts - 5 posts', (done) => {
            request(app)
                .post('/posts/addPost')
                .set({ Authorization: `Bearer ${token}` })
                .send({
                    title: 'This is my first blog post',
                    body: 'Here is the body of the best blog post ever known to man',
                    author: userID,
                })
                .end((err, res) => {
                    done();
                });
        });
    });

    describe('#getOne', () => {
        // create tests here
    });

    describe('#update', () => {
        // create tests here
    });

    describe('#upvote', () => {
        // create tests here
    });

    describe('#downvote', () => {
        // create tests here
    });

    describe('#delete', () => {
        // create tests here
    });
});
