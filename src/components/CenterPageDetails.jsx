import React from "react";

import { Routes, Route } from "react-router-dom";
import Group from "./pages/Group";
import Mail from "./pages/Mail";
import Drafts from "./pages/Drafts";
import Templates from "./pages/Templates";
import Snoozed from "./pages/Snoozed";
import Sent from "./pages/Sent";
import Spam from "./pages/Spam";
import Trash from "./pages/Trash";
import Outbox from "./pages/Outbox";
import NewsLetter from "./pages/NewsLetter";
import Notification from "./pages/Notification";
import StreamsHome from "./pages/StreamsHome";
import StreamsUnread from "./pages/StreamsUnread";
import Unread from "./pages/Unread";
import AllMessages from "./pages/AllMessages";
import Flagged from "./pages/Flagged";
import AllArchived from "./pages/AllArchived";

function CenterPageDetails({ showTab }) {
    return (
        <>
            <Routes>
                <Route index path="/" element={<Mail />} />
                <Route path="/group" element={<Group />} />
                <Route path="/streams/home" element={<StreamsHome />} />
                <Route path="/streams/unread" element={<StreamsUnread />} />
                <Route path="/mail/drafts" element={<Drafts />} />
                <Route path="/mail/templates" element={<Templates />} />
                <Route path="/mail/snoozed" element={<Snoozed />} />
                <Route path="/mail/sent" element={<Sent />} />
                <Route path="/mail/spam" element={<Spam />} />
                <Route path="/mail/trash" element={<Trash />} />
                <Route path="/mail/outbox" element={<Outbox />} />
                <Route path="/mail/newsletter" element={<NewsLetter />} />
                <Route path="/mail/notification" element={<Notification />} />
                <Route path="/mail/unread" element={<Unread />} />
                <Route path="/mail/all_messages" element={<AllMessages />} />
                <Route path="/mail/flagged" element={<Flagged />} />
                <Route path="/mail/all_archived" element={<AllArchived />} />
            </Routes>
        </>
    );
}

export default CenterPageDetails;
