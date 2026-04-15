module.exports = () => {
  const controller = {};

  controller.get = async (req, res) => {
    res.json({
      versao: `Bia ${process.env.VERSAO_API || "4.2.0"}`,
      ambiente: process.env.AMBIENTE || "development",
      cliente: process.env.CLIENTE || "default",
    });
  };

  return controller;
};
