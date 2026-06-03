// src/utils/agoraToken.ts

import { RtcRole, RtcTokenBuilder } from "agora-access-token";
import { env } from "../configs/env";

export const generateAgoraUid = (): number => {
    return Math.floor(Math.random() * 1_000_000_000) + 1;
};

export const generateAgoraToken = (
    channelName: string,
    uid: number
): string => {
    const expireTimeInSeconds = 60 * 60;
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const privilegeExpireTime = currentTimestamp + expireTimeInSeconds;

    return RtcTokenBuilder.buildTokenWithUid(
        env.agoraAppId as string,
        env.agoraAppCertificate as string,
        channelName,
        uid,
        RtcRole.PUBLISHER,
        privilegeExpireTime
    );
};