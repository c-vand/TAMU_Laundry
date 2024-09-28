app.post('/signin', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find user
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Generate token
        const token = jwt.sign({ userId: user._id, username: user.username }, JWT_SECRET, {
            expiresIn: '1h',
        });

        res.json({ message: 'Sign in successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Error signing in' });
    }
});
