const handleHttp = (res, error) => {
    res.status(500).send({ error });
};
export { handleHttp };
