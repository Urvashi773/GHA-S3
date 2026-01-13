# GHA-S3

# GHA-S3

CI/CD POC: Deploy a static website to **AWS S3** bucket **`aws-gha-s3`** using **GitHub Actions**.

## How it works
- On push to `main`, the workflow syncs `dist/` to S3 and **deletes** removed files for a clean deploy.
- (Optional) CloudFront invalidation can be added to refresh cache.

## References
- Bryant Logan: *CI/CD Workflow: GitHub Actions for AWS S3* (Medium)
- `jakejarvis/s3-sync-action` marketplace action for syncing to S3.
``
