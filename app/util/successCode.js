function successCode(status, message, data, paginationData) {
    if (paginationData == 'null' || paginationData == null) {
      let response = {
        status: status,
        msg: message,
        payload: { data },
      };
      return response;
    } else {
      let response = {
        status: status,
        msg: message,
        payload: { data },
        paginationData: paginationData,
      };
      return response;
    }
  }
 
  module.exports =  successCode ;
  