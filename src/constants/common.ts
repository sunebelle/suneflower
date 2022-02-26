const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const formatDate = "YYYY/MM/DD";

const formatYearMonthDateHours = "YYYY-MM-DD HH:mm";

const formatHoursMinutes = "HH:mm";

const formatYearMonthDate = "YYYY-MM-DD";

const formatYear = "YYYY";

const formatMonth = "YYYY/MM";

const formatDateColumn = "YYYY/MM/DD HH:mm";

const formatDateAPI = "YYYY-MM-DD HH:mm:ss";

const formatDateCSV = "yyyyMMDD_hhmm";

const formatDateAttend = "YYYY/MM/DD HH:mm";

const formatDateICDApprove = "YYYY/MM/DD HH:mm";

const formatDateAttachmentFile = "YYYY/MM/DD HH:mm";

const formatAttachmentFileName = "yyyyMMDDHHmmss";

const formatExecuteDate = "YYYY/MM/DD hh:mm";

const formatYearMonthDateCustom = "YYYY年MM月DD日";

const formatYearMonthDateHhMmCustom = "YYYY年MM月DD日 HH:mm";

const formatURL = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

const userRoot = "root";

const embbedYoutubeUrl = "https://www.youtube.com/embed/"

export default {
  emailPattern,
  formatDate,
  formatDateAPI,
  formatDateColumn,
  formatDateCSV,
  formatDateAttend,
  formatURL,
  formatYear,
  formatMonth,
  formatYearMonthDateHours,
  formatYearMonthDate,
  formatHoursMinutes,
  formatDateICDApprove,
  formatDateAttachmentFile,
  formatAttachmentFileName,
  formatExecuteDate,
  userRoot,
  formatYearMonthDateCustom,
  formatYearMonthDateHhMmCustom,
  embbedYoutubeUrl
};
