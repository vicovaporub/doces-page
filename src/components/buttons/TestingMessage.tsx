export const TestingMessage = () => {
  const onTestingMessageClick = async () => {
    try {
      const response = await fetch("/api/sendMessages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: "5511974804023",
          type: "template",
          template: {
            name: "hello_world",
            language: {
              code: "en_US",
            },
          },
        }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={onTestingMessageClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Testing Message
    </button>
  );
};
