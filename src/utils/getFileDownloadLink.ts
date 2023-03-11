export const getFileDownloadLink = (data: string, fileType: string) => {
  return window.URL.createObjectURL(
    new Blob([data], {
      type: `application/${fileType}`,
    })
  );
};
