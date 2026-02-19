export type AccessApprovalStatus = "pending_approval" | "approved" | "denied" | "revoked";

export function formatApprovalStatusMessage(params: {
  grantId: string;
  status: AccessApprovalStatus;
  dashboardBaseUrl?: string;
}): string {
  const base = params.dashboardBaseUrl || "https://dashboard.paulisplace.com";
  const link = `${base}/access/grants?grant=${encodeURIComponent(params.grantId)}`;

  if (params.status === "pending_approval") {
    return `Access request ${params.grantId} is pending approval. Review: ${link}`;
  }
  if (params.status === "approved") {
    return `Access request ${params.grantId} was approved.`;
  }
  if (params.status === "denied") {
    return `Access request ${params.grantId} was denied.`;
  }
  return `Access request ${params.grantId} was revoked.`;
}
