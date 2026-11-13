import { Button, Typography, FlexBox, Chip } from '@montage-ui/core'
import { results } from '../data/results.js'

export default function ResultScreen({ resultType, onRestart }) {
  const result = results[resultType]

  return (
    <FlexBox
      flexDirection="column"
      sx={{
        minHeight: '100vh',
        maxWidth: '480px',
        margin: '0 auto',
        width: '100%',
        padding: '40px 24px',
      }}
    >
      {/* 이미지 */}
      <FlexBox
        alignItems="center"
        justifyContent="center"
        sx={{
          width: '100%',
          aspectRatio: '1',
          borderRadius: '24px',
          backgroundColor: 'var(--montage-color-background-secondary, #f7f7f8)',
          marginBottom: '32px',
          overflow: 'hidden',
        }}
      >
        {result.image ? (
          <img
            src={result.image}
            alt={result.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <span style={{ fontSize: '80px' }}>{result.emoji}</span>
        )}
      </FlexBox>

      {/* 유형 이름 */}
      <Typography
        variant="label2"
        color="label-assistive"
        sx={{ marginBottom: '8px' }}
      >
        나의 디자이너 유형
      </Typography>

      <Typography
        variant="display2"
        weight="bold"
        sx={{ marginBottom: '8px' }}
      >
        {result.name}
      </Typography>

      <Typography
        variant="body1"
        weight="medium"
        color="label-secondary"
        sx={{ marginBottom: '20px' }}
      >
        {result.subtitle}
      </Typography>

      {/* 태그 */}
      <FlexBox gap={8} sx={{ marginBottom: '24px', flexWrap: 'wrap' }}>
        {result.tags.map((tag) => (
          <Chip key={tag} size="small">
            {tag}
          </Chip>
        ))}
      </FlexBox>

      {/* 설명 */}
      <Typography
        variant="body1"
        color="label-secondary"
        sx={{ lineHeight: '1.7', marginBottom: '48px' }}
      >
        {result.description}
      </Typography>

      {/* 버튼 */}
      <FlexBox flexDirection="column" gap={12}>
        <Button
          size="large"
          fullWidth
          variant="outlined"
          color="assistive"
        >
          공유하기
        </Button>
        <Button
          size="large"
          fullWidth
          variant="outlined"
          onClick={onRestart}
        >
          다시하기
        </Button>
      </FlexBox>
    </FlexBox>
  )
}
