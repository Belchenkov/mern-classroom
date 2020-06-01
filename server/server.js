import config from './../config/config';
import app from './express';
import mongoose from 'mongoose';

// Routes
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';

// Connection URL
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri,  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('MongoDB connecting');

        app.listen(config.port, (err) => {
            if (err) console.log(err);

            console.info('Server started on port %s.', config.port);

            app.use('/', userRoutes);
            app.use('/', authRoutes);

            app.use((err, req, res, next) => {
                if (err.name === 'UnauthorizedError') {
                    res.status(401).json({"error" : err.name + ": " + err.message});
                }
            });

        });
    })
    .catch(err => console.log(err));

mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`)
});


