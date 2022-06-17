export interface Player {
    wallet: string;
    token: string;
    expiresAt: Date;

    getExpiresAtFormatted(expiresAt: Date): string;
}